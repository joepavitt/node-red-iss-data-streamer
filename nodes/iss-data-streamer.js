var Ls = require('lightstreamer-client-node');
const feeds = require('../resources/telemetry-dictionary.json');
let dictionary = {};

function format (value, structure) {
    if (structure.includes(':f') | structure.includes(':d')) {
        return Number(value)
    } else if (structure.includes('|') && structure.includes('=')) {
        // ENUM
        const enumMap = {}
        structure.split('|').forEach(v => {
            const [key, val] = v.split('=')
            enumMap[key] = val
        })
        return enumMap[value]
    }
    return value
}

module.exports = function(RED) {
    function ISSNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        var lsClient = new Ls.LightstreamerClient("http://push.lightstreamer.com","ISSLIVE");
        lsClient.connectionOptions.setSlowingEnabled(false);

        // map all feeds by PUI
        feeds.forEach(function(feed) {
            dictionary[feed.Public_PUI] = feed;
        })

        const keys = config.feeds
        if (keys.length > 0) {
            var sub = new Ls.Subscription("MERGE", keys, ["TimeStamp","Value"]);

            var timeSub = new Ls.Subscription('MERGE', 'TIME_000001', ['TimeStamp','Value','Status.Class','Status.Indicator']);
            
            lsClient.subscribe(sub);
            lsClient.subscribe(timeSub);
    
            lsClient.connect();
    
            sub.addListener({
                onSubscription: function() 
                {
                    node.status({ fill:"green", shape:"dot", text:"subscribed" });
                },
                onUnsubscription: function() 
                {
                    node.status({ fill:"red", shape:"dot", text:"not subscribed" });
                },
                onItemUpdate: function(update) 
                {
                    const PUI = update.getItemName()
                    let value = update.getValue("Value")
                    if (config.outputType === 'formatted') {
                        value = format(value, dictionary[PUI].Format);
                    } else if (config.outputType === 'both') {
                        const formatted = format(value, dictionary[PUI].Format);
                        value = {
                            raw: value,
                            formatted: formatted
                        }
                    }
                    node.send({
                        payload: value,
                        topic: PUI,
                        timestamp: update.getValue("TimeStamp")
                    })
                }
            })
        } else {
            node.status({ fill:"red", shape:"dot", text:"no feeds selected" });
        }
        
        node.on('close', function() {
            lsClient.disconnect();
        })
    }

    RED.nodes.registerType("iss-data-streamer", ISSNode);
}