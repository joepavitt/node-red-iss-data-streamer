# International Space Station Data Stream

![Screenshot of Node-RED with the ISS Data Stream node in use](https://github.com/user-attachments/assets/0f06ee96-ec5d-4faa-8891-2429dcb5ca89)

This is a [Node-RED](https://nodered.org/) node that wraps the I.S.S. Lightstreamer feed, emitting real-time telemetry from the International Space Station.

It was heavily inspired by the [ISS Mimic Project](https://github.com/ISS-Mimic/Mimic), and this node can be used in Node-RED to create your own ISS Mimic and Dashboard.

## How to use

1. Install [Node-RED](https://nodered.org/docs/getting-started/installation)
2. Add this node via the Node-RED Palette Manager
3. Drag the `ISS Data` node onto your flow
4. Wire it to a "debug" node, and you can then see the output in the Node-RED debug panel

## Node Output

The node can output three different types of data:

- **Raw:** The raw data from the Lightstreamer feed, with no modifications
- **Formatted:** Each feed has a designated _type_, this output type will format the data into a more human-readable format, so numbers will display as numbers, or any feed with a key map (e.g. `0=OFF, 1=ON`) will output the human-readable format
- **Both:** This outputs a JSON structure with the keys `raw` and `formatted`, so you can access both data types

## Data Feeds

The data included with the stream is extensive, you can toggle on/off different feeds within the node's configuration options.

### ADCO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| USLAB000001  | Control Moment Gyroscope (CMG)-1 On-Line                                    | 0=NOT IN USE \| 1=IN USE                             |
| USLAB000002  | Control Moment Gyroscope (CMG)-2 On-Line                                    | 0=NOT IN USE \| 1=IN USE                             |
| USLAB000003  | Control Moment Gyroscope (CMG)-3 On-Line                                    | 0=NOT IN USE \| 1=IN USE                             |
| USLAB000004  | Control Moment Gyroscope (CMG)-4 On-Line                                    | 0=NOT IN USE \| 1=IN USE                             |
| USLAB000005  | Number of Control Moment Gyroscope (CMG)s Online                            | {0:d0}                                             |
| USLAB000006  | Control Moment Gyroscope (CMG) Control Torque - Roll (N-m)                  | {0:f4}                                             |
| USLAB000007  | Control Moment Gyroscope (CMG) Control Torque - Pitch (N-m)                 | {0:f4}                                             |
| USLAB000008  | Control Moment Gyroscope (CMG) Control Torque - Yaw (N-m)                   | {0:f4}                                             |
| USLAB000009  | Active Control Moment Gyroscope (CMG) Momentum (Nms)                        | {0:d0}                                             |
| USLAB000011  | Desaturation Request (Enabled/Inhibited)                                    | 0=ENABLED  \|  1=INHIBITED                             |
| USLAB000013  | US Attitude Source                                                          | 0=NONE\ | 1=GPS1 \| 2=GPS2 \| 3=Russian_Attitude \| 4=Ku_Band |
| USLAB000014  | US Rate Source                                                              | 0=NONE \| 1=RGA1 \| 2=RGA2 \| 3=RUSSIAN                  |
| USLAB000015  | US State Vector Source                                                      | 0=NO_SOURCE \| 1=Unused \| 2=Unused \| 3=RUSSIAN \| 4=GPS1_DETERMINISTIC \| 5=GPS2_DETERMINISTIC \| 6=GROUND |
| USLAB000016  | Attitude Controller Type                                                    | 0=ATTITUDE HOLD \| 1=TEA                             |
| USLAB000017  | Attitude Control Reference Frame                                            | 0=LVLH \| 1=Inertial \| 2=XPOP                         |
| USLAB000018  | US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 0 | {0:f2}                                             |
| USLAB000019  | US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 1 | {0:f2}                                             |
| USLAB000020  | US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 2 | {0:f2}                                             |
| USLAB000021  | US Current Local Vertical Local Horizontal (LVLH) Attitude Quaternion Component 3 | {0:f2}                                             |
| USLAB000022  | US Attitude Roll Error (deg)                                                | {0:f2}                                             |
| USLAB000023  | US Attitude Pitch Error (deg)                                               | {0:f2}                                             |
| USLAB000024  | US Attitude Yaw Error (deg)                                                 | {0:f2}                                             |
| USLAB000025  | US Commanded Attitude Quaternion Component 0                                | {0:f2}                                             |
| USLAB000026  | US Commanded Attitude Quaternion Component 1                                | {0:f2}                                             |
| USLAB000027  | US Commanded Attitude Quaternion Component 2                                | {0:f2}                                             |
| USLAB000028  | US Commanded Attitude Quaternion Component 3                                | {0:f2}                                             |
| USLAB000038  | Active Control Moment Gyroscope (CMG) Momentum Capacity (Nms)               | {0:d0}                                             |
| USLAB000039  | ISS Total Mass (kg)                                                         | {0:d0}                                             |
| USLAB000040  | Solar Beta Angle (degrees)                                                  | {0:f2}                                             |
| USLAB000041  | Loss of CMG Attitude Control (LOAC) Caution Message In Alarm                | 0=FALSE \| 1=TRUE                                    |
| USLAB000042  | Loss of ISS Attitude Control (LOAC) Caution Message In Alarm                | 0=FALSE \| 1=TRUE                                    |
| USLAB000043  | Global Positioning System (GPS-1) Ops Status                                | 0=DOING POSITION FIXES \| 1=SV TIMING \| 2=APPROXIMATE TIMING \| 3=GPS TIME \| 4=NEED INITIALIZATION \| 5=GDOP NEEDED \| 6=BAD TIMING \| 7=NO USABLE SV \| 8=ONLY 1 USABLE SVs \| 9=ONLY 2 USABLE SVs \| 10=ONLY 3 USABLE SVs \| 11=BAD INTEGRITY \| 12=NO VEL AVAIL \| 13=UNUSABLE FIX |
| USLAB000044  | Global Positioning System (GPS-2) Ops Status                                | 0=DOING POSITION FIXES \| 1=SV TIMING \| 2=APPROXIMATE TIMING \| 3=GPS TIME \| 4=NEED INITIALIZATION \| 5=GDOP NEEDED \| 6=BAD TIMING \| 7=NO USABLE SV \| 8=ONLY 1 USABLE SVs \| 9=ONLY 2 USABLE SVs \| 10=ONLY 3 USABLE SVs \| 11=BAD INTEGRITY \| 12=NO VEL AVAIL \| 13=UNUSABLE FIX |
| USLAB000045  | Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 1 (deg C) | {0:f1}                                             |
| USLAB000046  | Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 2 (deg C) | {0:f1}                                             |
| USLAB000047  | Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 3 (deg C) | {0:f1}                                             |
| USLAB000048  | Spin Motor Spin Bearing Temperature - Control Moment Gyroscope (CMG) 4 (deg C) | {0:f1}                                             |
| USLAB000049  | Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 1 (deg C) | {0:f1}                                             |
| USLAB000050  | Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 2 (deg C) | {0:f1}                                             |
| USLAB000051  | Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 3 (deg C) | {0:f1}                                             |
| USLAB000052  | Hall Resolver Spin Bearing Temperature - Control Moment Gyroscope (CMG) 4 (deg C) | {0:f1}                                             |
| Z1000001     | Control Moment Gyroscope (CMG)-1 Vibration (g)                              | {0:f2}                                             |
| Z1000002     | Control Moment Gyroscope (CMG)-2 Vibration (g)                              | {0:f2}                                             |
| Z1000003     | Control Moment Gyroscope (CMG)-3 Vibration (g)                              | {0:f2}                                             |
| Z1000004     | Control Moment Gyroscope (CMG)-4 Vibration (g)                              | {0:f2}                                             |
| Z1000005     | Control Moment Gyroscope (CMG)-1 Spin Motor Current (amps)                  | {0:f2}                                             |
| Z1000006     | Control Moment Gyroscope (CMG)-2 Spin Motor Current (amps)                  | {0:f2}                                             |
| Z1000007     | Control Moment Gyroscope (CMG)-3 Spin Motor Current (amps)                  | {0:f2}                                             |
| Z1000008     | Control Moment Gyroscope (CMG)-4 Spin Motor Current (amps)                  | {0:f2}                                             |
| Z1000009     | Control Moment Gyroscope (CMG) 1 Wheel Speed (rpm)                          | {0:d0}                                             |
| Z1000010     | Control Moment Gyroscope (CMG) 2 Wheel Speed (rpm)                          | {0:d0}                                             |
| Z1000011     | Control Moment Gyroscope (CMG) 3 Wheel Speed (rpm)                          | {0:d0}                                             |
| Z1000012     | Control Moment Gyroscope (CMG) 4 Wheel Speed (rpm)                          | {0:d0}                                             |

### CDH

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| AIRLOCK000058 | Airlock Multiplexer/Demultiplexer (MDM) on-off status                      | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE1000001   | Node 1 Multiplexer/Demultiplexer (MDM) 1 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE1000002   | Node 1 Multiplexer/Demultiplexer (MDM) 2 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE2000004   | Node 2 Multiplexer/Demultiplexer (MDM) 2 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE2000005   | Node 2 Multiplexer/Demultiplexer (MDM) 1 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE3000014   | Hub Control Zone (HCZ) Multiplexer/Demultiplexer 2 (MDM) on-off status     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE3000015   | Node 3 Multiplexer/Demultiplexer (MDM) 2 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE3000016   | Hub Control Zone (HCZ) Multiplexer/Demultiplexer 1 (MDM) on-off status     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| NODE3000020   | Node 3 Multiplexer/Demultiplexer (MDM) 1 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| P1000006      | P1 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| P1000008      | Port Thermal Radiator (STR) Multiplexer/Demultiplexer (MDM) on-off status  | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| P1000009      | P1 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| P3000001      | P3 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| P3000002      | P3 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| P4000003      | Photovolatic Control Unit (PVCU) - Solar Array - 2A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| P4000006      | Photovolatic Control Unit (PVCU) - Solar Array - 4A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| P6000003      | Photovolatic Control Unit (PVCU) - Solar Array - 4B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| P6000006      | Photovolatic Control Unit (PVCU) - Solar Array - 2B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| S0000010      | External Control Zone Multiplexer/Demultiplexer (MDM) 1 on-off status      | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S0000011      | S0 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S0000012      | External Control Zone Multiplexer/Demultiplexer (MDM) 2 on-off status      | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S0000013      | S0 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S1000006      | Starboard Thermal Radiator (STR) Multiplexer/Demultiplexer (MDM) on-off status | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S1000007      | S1 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S1000008      | S1 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S3000001      | S3 Truss Multiplexer/Demultiplexer (MDM) 1 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S3000002      | S3 Truss Multiplexer/Demultiplexer (MDM) 2 on-off status                   | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S4000003      | Photovolatic Control Unit (PVCU) - Solar Array - 1A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| S4000006      | Photovolatic Control Unit (PVCU) - Solar Array - 3A Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| S6000003      | Photovolatic Control Unit (PVCU) - Solar Array - 3B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| S6000006      | Photovolatic Control Unit (PVCU) - Solar Array - 1B Multiplexer/Demultiplexer (MDM) 120 Volt On-Off Status | 0=Not Enabled \| 1=Enabled                           |
| USLAB000066   | Command and Control (C&C) Multiplexer/Demultiplexer (MDM) 1 on-off status  | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000067   | Command and Control (C&C) Multiplexer/Demultiplexer (MDM) 2 on-off status  | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000068   | Command and Control (C&C) Multiplexer/Demultiplexer (MDM) 3 on-off status  | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000069   | Internal Control Zone Multiplexer/Demultiplexer (MDM) 1 on-off status      | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000070   | Internal Control Zone Multiplexer/Demultiplexer (MDM) 2 on-off status      | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000071   | Payload (PL) Multiplexer/Demultiplexer (MDM) 1 on-off status               | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000072   | Payload (PL) Multiplexer/Demultiplexer (MDM) 2 on-off status               | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000073   | Guidance, Navigation and Control (GNC) Multiplexer/Demultiplexer 1 on-off status | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000074   | Guidance, Navigation and Control (GNC) Multiplexer/Demultiplexer 2 on-off status | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000075   | Power Management Controller Unit (PMCU) 1 Multiplexer/Demultiplexer 1 on-off status | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000076   | Power Management Controller Unit (PMCU) 2 Multiplexer/Demultiplexer 1 on-off status | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000077   | US Lab Multiplexer/Demultiplexer (MDM) 1 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000078   | US Lab Multiplexer/Demultiplexer (MDM) 2 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000079   | US Lab Multiplexer/Demultiplexer (MDM) 3 on-off status                     | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000080   | Permanent Multipurpose Module - System Power voltage status                | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |

### CATO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| P1000004     | S-Band Radio Frequency Group (RFG 2) Azimuth Gimbal Position                | {0:f2}                                             |
| P1000005     | S-Band Radio Frequency Group (RFG 2) Elevation Gimbal Position              | {0:f2}                                             |
| P1000007     | S-Band Radio Frequency Group (RFG 2), on-off status                         | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| S1000004     | S-Band Radio Frequency Group (RFG 1) Azimuth Gimbal Position                | {0:f2}                                             |
| S1000009     | S-Band Radio Frequency Group (RFG 1), on-off status                         | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000088  | Ku-Band Video Downlink Channel 1 Activity                                   | 0=INACTIVE \| 1=ACTIVE                               |
| USLAB000089  | Ku-Band Video Downlink Channel 2 Activity                                   | 0=INACTIVE \| 1=ACTIVE                               |
| USLAB000090  | Ku-Band Video Downlink Channel 3 Activity                                   | 0=INACTIVE \| 1=ACTIVE                               |
| USLAB000091  | Ku-Band Video Downlink Channel 4 Activity                                   | 0=INACTIVE \| 1=ACTIVE                               |
| USLAB000092  | Active String of S-Band                                                    | 1=String 1 \| 2=String 2                             |
| USLAB000093  | Internal Audio Controller (IAC) - IAC-1 Active/Backup Indication            | 0=Backup \| 1=Active                                 |
| USLAB000094  | Internal Audio Controller (IAC) - IAC-2 Active/Backup Indication            | 0=Backup \| 1=Active                                 |
| USLAB000095  | Video Source Routed to Downlink 1                                           | 0= - \| 1=S3AFT \| 2=S1UPOB \| 3=SCU1 Mux \| 4=S1LOOB \| 5=JPM a \| 6=JPM b \| 7=S1UPIB \| 8=S1LOIB \| 9=COL 1 \| 10=COL 2 \| 11=P1UPIB \| 12=SCU2 Mux \| 13=NOD3S \| 14=P1LOIB \| 15=SCU1 Test \| 16=WETA112 \| 17=ORB1 \| 18=ORB2 \| 19=P1LOOB \| 20=SCU2 Test \| 21=P3AFT \| 22=Payload Rack \| 23=VTR1 \| 24=VTR2 \| 25=NOD2LO \| 26=WETA115 \| 28=LAB S \| 31=POA PL3 \| 32=POA \| 33=SPDMS1 \| 34=SPDMS2 \| 35=MBS CLPA \| 36=SPDMLEE \| 37=MAST \| 40=BLEE \| 43=BELB \| 48=TELB \| 50=MSS PL3 \| 51=TLEE \| 52=Lab AVU1 \| 53=Lab AVU2 \| 54=Cup AVU1 \| 55=Cup AVU2 \| 56=OTCM1 \| 57=BODY1 \| 58=OTCM2 \| 59=BODY2 \| 60=SSRMS PL1 \| 61=SSRMS PL2 \| 62=SSRMS PL3 \| 63=MSS PL1 \| 64=MSS PL2 \| 65=LAB1D3 \| 66=LAB1P2 \| 67=LAB1P4 \| 68=LABCAM \| 69=LAB1O5 \| 70=LAB1O4 \| 71=LAB1O3 \| 72=LAB1O2 \| 73=LAB1O1 \| 74=LAB1S1 \| 75=LAB1S2 \| 76=LAB1S3 \| 77=A/L CAM \| 78=LAB1S4 \| 79=N1 CAM \| 80=N3 CAM |
| USLAB000096  | Video Source Routed to Downlink 2                                           | 0= - \| 1=S3AFT \| 2=S1UPOB \| 3=SCU1 Mux \| 4=S1LOOB \| 5=JPM a \| 6=JPM b \| 7=S1UPIB \| 8=S1LOIB \| 9=COL 1 \| 10=COL 2 \| 11=P1UPIB \| 12=SCU2 Mux \| 13=NOD3S \| 14=P1LOIB \| 15=SCU1 Test \| 16=WETA112 \| 17=ORB1 \| 18=ORB2 \| 19=P1LOOB \| 20=SCU2 Test \| 21=P3AFT \| 22=Payload Rack \| 23=VTR1 \| 24=VTR2 \| 25=NOD2LO \| 26=WETA115 \| 28=LAB S \| 31=POA PL3 \| 32=POA \| 33=SPDMS1 \| 34=SPDMS2 \| 35=MBS CLPA \| 36=SPDMLEE \| 37=MAST \| 40=BLEE \| 43=BELB \| 48=TELB \| 50=MSS PL3 \| 51=TLEE \| 52=Lab AVU1 \| 53=Lab AVU2 \| 54=Cup AVU1 \| 55=Cup AVU2 \| 56=OTCM1 \| 57=BODY1 \| 58=OTCM2 \| 59=BODY2 \| 60=SSRMS PL1 \| 61=SSRMS PL2 \| 62=SSRMS PL3 \| 63=MSS PL1 \| 64=MSS PL2 \| 65=LAB1D3 \| 66=LAB1P2 \| 67=LAB1P4 \| 68=LABCAM \| 69=LAB1O5 \| 70=LAB1O4 \| 71=LAB1O3 \| 72=LAB1O2 \| 73=LAB1O1 \| 74=LAB1S1 \| 75=LAB1S2 \| 76=LAB1S3 \| 77=A/L CAM \| 78=LAB1S4 \| 79=N1 CAM \| 80=N3 CAM |
| USLAB000097  | Video Source Routed to Downlink 3                                           | 0= - \| 1=S3AFT \| 2=S1UPOB \| 3=SCU1 Mux \| 4=S1LOOB \| 5=JPM a \| 6=JPM b \| 7=S1UPIB \| 8=S1LOIB \| 9=COL 1 \| 10=COL 2 \| 11=P1UPIB \| 12=SCU2 Mux \| 13=NOD3S \| 14=P1LOIB \| 15=SCU1 Test \| 16=WETA112 \| 17=ORB1 \| 18=ORB2 \| 19=P1LOOB \| 20=SCU2 Test \| 21=P3AFT \| 22=Payload Rack \| 23=VTR1 \| 24=VTR2 \| 25=NOD2LO \| 26=WETA115 \| 28=LAB S \| 31=POA PL3 \| 32=POA \| 33=SPDMS1 \| 34=SPDMS2 \| 35=MBS CLPA \| 36=SPDMLEE \| 37=MAST \| 40=BLEE \| 43=BELB \| 48=TELB \| 50=MSS PL3 \| 51=TLEE \| 52=Lab AVU1 \| 53=Lab AVU2 \| 54=Cup AVU1 \| 55=Cup AVU2 \| 56=OTCM1 \| 57=BODY1 \| 58=OTCM2 \| 59=BODY2 \| 60=SSRMS PL1 \| 61=SSRMS PL2 \| 62=SSRMS PL3 \| 63=MSS PL1 \| 64=MSS PL2 \| 65=LAB1D3 \| 66=LAB1P2 \| 67=LAB1P4 \| 68=LABCAM \| 69=LAB1O5 \| 70=LAB1O4 \| 71=LAB1O3 \| 72=LAB1O2 \| 73=LAB1O1 \| 74=LAB1S1 \| 75=LAB1S2 \| 76=LAB1S3 \| 77=A/L CAM \| 78=LAB1S4 \| 79=N1 CAM \| 80=N3 CAM |
| USLAB000098  | Video Source Routed to Downlink 4                                           | 0= - \| 1=S3AFT \| 2=S1UPOB \| 3=SCU1 Mux \| 4=S1LOOB \| 5=JPM a \| 6=JPM b \| 7=S1UPIB \| 8=S1LOIB \| 9=COL 1 \| 10=COL 2 \| 11=P1UPIB \| 12=SCU2 Mux \| 13=NOD3S \| 14=P1LOIB \| 15=SCU1 Test \| 16=WETA112 \| 17=ORB1 \| 18=ORB2 \| 19=P1LOOB \| 20=SCU2 Test \| 21=P3AFT \| 22=Payload Rack \| 23=VTR1 \| 24=VTR2 \| 25=NOD2LO \| 26=WETA115 \| 28=LAB S \| 31=POA PL3 \| 32=POA \| 33=SPDMS1 \| 34=SPDMS2 \| 35=MBS CLPA \| 36=SPDMLEE \| 37=MAST \| 40=BLEE \| 43=BELB \| 48=TELB \| 50=MSS PL3 \| 51=TLEE \| 52=Lab AVU1 \| 53=Lab AVU2 \| 54=Cup AVU1 \| 55=Cup AVU2 \| 56=OTCM1 \| 57=BODY1 \| 58=OTCM2 \| 59=BODY2 \| 60=SSRMS PL1 \| 61=SSRMS PL2 \| 62=SSRMS PL3 \| 63=MSS PL1 \| 64=MSS PL2 \| 65=LAB1D3 \| 66=LAB1P2 \| 67=LAB1P4 \| 68=LABCAM \| 69=LAB1O5 \| 70=LAB1O4 \| 71=LAB1O3 \| 72=LAB1O2 \| 73=LAB1O1 \| 74=LAB1S1 \| 75=LAB1S2 \| 76=LAB1S3 \| 77=A/L CAM \| 78=LAB1S4 \| 79=N1 CAM \| 80=N3 CAM |
| USLAB000099  | Space-To-Space Radio (UHF) 1 Power                                          | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000100  | Space-To-Space Radio (UHF) 2 Power                                          | 0=Off-Ok \| 1=Not-Off Ok \| 3=Not-Off Failed           |
| USLAB000101  | Space-To-Space Radio Frame Sync Lock                                        | 0=Frame Sync unlocked \| 1=Frame Sync locked         |
| Z1000013     | Ku-Band Transmit                                                            | 0=RESET \| 1=NORMAL                                  |
| Z1000014     | Ku-Band SGANT Elevation Position                                            | {0:f2}                                             |
| Z1000015     | Ku-Band SGANT Cross-Elevation Position                                      | {0:f2}                                             |

### CSA

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| CSAMT000001  | MSS MT Position Float                                                       | Position, centimeters from 0                       |
| CSAMT000001  | MSS MT Utility Port ID (which Worksite MT is connected to, WS1 though WS8)  | 1=WS1 \| 2=WS2 \| 3=WS3 \| 4=WS4 \| 5=WS5 \| 6=WS6 \| 7=WS7 \| 8=WS8 |
| CSASSRMS001  | MSS EDCD SSRMS Base Location                                                | ?                                                  |
| CSASSRMS002  | MSS EDCD SSRMS Base Location                                                | 1=Lab \| 2=Node3 \| 4=Node2 \| 7=MBS PDGF 1 \| 8=MBS PDGF 2 \| 11=MBS PDGF 3 \| 13=MBS PDGF 4 \| 14=FGB \| 16=POA \| 19=SSRMS Tip LEE \| 63=Undefined |
| CSASSRMS003  | MSS EDCD SSRMS Operating Base (Which LEE is Base)                           | 0=Lee A \| 5=Lee B                                   |
| CSASSRMS004  | SSRMS SR Measured Joint Position                                            | Angle                                              |
| CSASSRMS005  | SSRMS SY Measured Joint Position                                            | Angle                                              |
| CSASSRMS006  | SSRMS SP Measured Joint Position                                            | Angle                                              |
| CSASSRMS007  | SSRMS EP Measured Joint Position                                            | Angle                                              |
| CSASSRMS008  | SSRMS WP Measured Joint Position                                            | Angle                                              |
| CSASSRMS009  | SSRMS WY Measured Joint Position                                            | Angle                                              |
| CSASSRMS010  | SSRMS WR Measured Joint Position                                            | Angle                                              |
| CSASSRMS011  | MSS OCS Payload Status SSRMS Tip LEE                                        | 0=Released \| 1=Captive \| 2=Captured                  |
| CSASPDM0001  | MSS OCS Base Location SPDM                                                  | ?                                                  |
| CSASPDM0002  | MSS OCS Base Location SPDM                                                  | 1=Lab \| 2=Node3 \| 4=Node2 \| 7=MBS PDGF 1 \| 8=MBS PDGF 2 \| 11=MBS PDGF 3 \| 13=MBS PDGF 4 \| 14=FGB \| 16=POA \| 19=SSRMS Tip LEE \| 63=Undefined |
| CSASPDM0003  | MSS OCS SPDM 1 SR Measured Joint Position                                   | Angle                                              |
| CSASPDM0004  | MSS OCS SPDM 1 SY Measured Joint Position                                   | Angle                                              |
| CSASPDM0005  | MSS OCS SPDM 1 SP Measured Joint Position                                   | Angle                                              |
| CSASPDM0006  | MSS OCS SPDM 1 EP Measured Joint Position                                   | Angle                                              |
| CSASPDM0007  | MSS OCS SPDM 1 WP Measured Joint Position                                   | Angle                                              |
| CSASPDM0008  | MSS OCS SPDM 1 WY Measured Joint Position                                   | Angle                                              |
| CSASPDM0009  | MSS OCS SPDM 1 WR Measured Joint Position                                   | Angle                                              |
| CSASPDM0010  | MSS Payload Status OCS SPDM Arm 1 OTCM                                      | 0=Released \| 1=Captive \| 2=Captured                  |
| CSASPDM0011  | MSS OCS SPDM 2 SR Measured Joint Position                                   | Angle                                              |
| CSASPDM0012  | MSS OCS SPDM 2 SY Measured Joint Position                                   | Angle                                              |
| CSASPDM0013  | MSS OCS SPDM 2 SP Measured Joint Position                                   | Angle                                              |
| CSASPDM0014  | MSS OCS SPDM 2 EP Measured Joint Position                                   | Angle                                              |
| CSASPDM0015  | MSS OCS SPDM 2 WP Measured Joint Position                                   | Angle                                              |
| CSASPDM0016  | MSS OCS SPDM 2 WY Measured Joint Position                                   | Angle                                              |
| CSASPDM0017  | MSS OCS SPDM 2 WR Measured Joint Position                                   | Angle                                              |
| CSASPDM0018  | MSS Payload Status OCS SPDM Arm 2 OTCM?                                     | ?                                                  |
| CSASPDM0019  | MSS Payload Status OCS SPDM Arm 2 OTCM                                      | 0=Released \| 1=Captive \| 2=Captured                  |
| CSASPDM0020  | MSS OCS SPDM Body Roll Joint Position                                       | Angle                                              |
| CSASPDM0021  | MSS Payload Status OCS SPDM Body?                                           | ?                                                  |
| CSASPDM0022  | MSS Payload Status OCS SPDM Body                                            | 0=Released \| 1=Captive \| 2=Captured                  |
| CSAMBS00001  | MSS OCS Payload Status MBS MCAS?                                            | ?                                                  |
| CSAMBS00002  | MSS OCS Payload Status MBS MCAS                                             | 0=Released \| 1=Captured                             |
| CSAMBA00003  | MSS OCS Payload Status MBS POA?                                             | ?                                                  |
| CSAMBA00004  | MSS OCS Payload Status MBS POA                                              | 0=Released \| 1=Captive \| 2=Captured                  |


### EVA

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| AIRLOCK000001 | Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 1), Voltage | {0:f2}                                             |
| AIRLOCK000002 | Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 1), Current | {0:f2}                                             |
| AIRLOCK000003 | Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 2), Voltage | {0:f2}                                             |
| AIRLOCK000004 | Supplies power through the Umbilical Interface Assembly (UIA) to the spacesuits (EMU 2), Current | {0:f2}                                             |
| AIRLOCK000005 | In-flight Refill Unit (IRU), Voltage                                       | {0:f2}                                             |
| AIRLOCK000006 | In-flight Refill Unit (IRU), Current                                       | {0:f2}                                             |
| AIRLOCK000007 | Supplies power to the spacesuits (EVA Mobility Unit, EMU 1), Voltage       | {0:f2}                                             |
| AIRLOCK000008 | Supplies power to the spacesuits (EVA Mobility Unit, EMU 1), Current       | {0:f2}                                             |
| AIRLOCK000009 | Supplies power to the spacesuits (EVA Mobility Unit, EMU 2), Voltage       | {0:f2}                                             |
| AIRLOCK000010 | Supplies power to the spacesuits (EVA Mobility Unit, EMU 2), Current       | {0:f2}                                             |
| AIRLOCK000011 | Battery Charger Assembly (BCA) 1 Voltage                                   | {0:f2}                                             |
| AIRLOCK000012 | Battery Charger Assembly (BCA) 1 Current                                   | {0:f2}                                             |
| AIRLOCK000013 | Battery Charger Assembly (BCA) 2 Voltage                                   | {0:f2}                                             |
| AIRLOCK000014 | Battery Charger Assembly (BCA) 2 Current                                   | {0:f2}                                             |
| AIRLOCK000015 | Battery Charger Assembly (BCA) 3 Voltage                                   | {0:f2}                                             |
| AIRLOCK000016 | Battery Charger Assembly (BCA) 3 Current                                   | {0:f2}                                             |
| AIRLOCK000017 | Battery Charger Assembly (BCA) 4 Voltage                                   | {0:f2}                                             |
| AIRLOCK000018 | Battery Charger Assembly (BCA) 4 Current                                   | {0:f2}                                             |
| AIRLOCK000019 | Battery Charger Assembly (BCA) 1 Status                                    | 0=Normal \| 1=No Data \| 2=Missing Data \| 3=Extra Data  |
| AIRLOCK000020 | Battery Charger Assembly (BCA) 2 Status                                    | 0=Normal \| 1=No Data \| 2=Missing Data \| 3=Extra Data  |
| AIRLOCK000021 | Battery Charger Assembly (BCA) 3 Status                                    | 0=Normal \| 1=No Data \| 2=Missing Data \| 3=Extra Data  |
| AIRLOCK000022 | Battery Charger Assembly (BCA) 4 Status                                    | 0=Normal \| 1=No Data \| 2=Missing Data \| 3=Extra Data  |
| AIRLOCK000023 | Battery Charger Assembly (BCA) 1 Channel 1 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000024 | Battery Charger Assembly (BCA) 1 Channel 2 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000025 | Battery Charger Assembly (BCA) 1 Channel 3 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000026 | Battery Charger Assembly (BCA) 1 Channel 4 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000027 | Battery Charger Assembly (BCA) 1 Channel 5 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000028 | Battery Charger Assembly (BCA) 1 Channel 6 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000029 | Battery Charger Assembly (BCA) 2 Channel 1 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000030 | Battery Charger Assembly (BCA) 2 Channel 2 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000031 | Battery Charger Assembly (BCA) 2 Channel 3 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000032 | Battery Charger Assembly (BCA) 2 Channel 4 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000033 | Battery Charger Assembly (BCA) 2 Channel 5 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000034 | Battery Charger Assembly (BCA) 2 Channel 6 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000035 | Battery Charger Assembly (BCA) 3 Channel 1 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000036 | Battery Charger Assembly (BCA) 3 Channel 2 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000037 | Battery Charger Assembly (BCA) 3 Channel 3 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to a time-out error \| 14=Task terminated due to an external-temperature error \| 15=Discharge \| 16=Wait on Discharge \| 17=Wait on Charge |
| AIRLOCK000038 | Battery Charger Assembly (BCA) 3 Channel 4 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000039 | Battery Charger Assembly (BCA) 3 Channel 5 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000040 | Battery Charger Assembly (BCA) 3 Channel 6 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000041 | Battery Charger Assembly (BCA) 4 Channel 1 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000042 | Battery Charger Assembly (BCA) 4 Channel 2 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000043 | Battery Charger Assembly (BCA) 4 Channel 3 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000044 | Battery Charger Assembly (BCA) 4 Channel 4 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000045 | Battery Charger Assembly (BCA) 4 Channel 5 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000046 | Battery Charger Assembly (BCA) 4 Channel 6 Status                          | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK
| AIRLOCK000047 | Pumps atmosphere from Airlock into Node one during depress, voltage status.| 0=Off-Ok  \| 1=Not-Off Ok \| 2=Not-Off Failed\ |
| AIRLOCK000048 | Pumps atmosphere from Airlock into Node one during depress, switch status. | 0=No History - a charge has not been initiated yet \| 1=Presently charging \| 2=Task completed normally \| 3=Task terminated due to stop switch being toggled \| 4=Task terminated due to an open circuit error \| 5=Task terminated due to Wrong Batt or Hi-imp \| 6=Task terminated due to an over-temperature error \| 7=Amp-hour capacity test result OK \| 8=Amp-hour capacity test error \| 9=Task terminated due to low charge slope error \| 10=Task terminated due to power error \| 11=Task terminated due to reverse-polarity error \| 12=Task terminated due to a short-circuit error \| 13=Task terminated due to### AIRLOCK

### ETHOS

### AIRLOCK and NODE

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| AIRLOCK000049 | Crewlock Pressure                                                           | {0:f2}                                             |
| AIRLOCK000050 | Hi P O2 Supply valve position                                               | 0=CLOSED \| 1=OPEN \| 2=IN-TRANSIT \| 3=FAILED           |
| AIRLOCK000051 | Lo P O2 Supply Valve position                                               | 0=CLOSED \| 1=OPEN \| 2=IN-TRANSIT \| 3=FAILED           |
| AIRLOCK000052 | N2 Supply Valve position                                                    | 0=CLOSED \| 1=OPEN \| 2=IN-TRANSIT \| 3=FAILED           |
| AIRLOCK000053 | Airlock Air Conditioner State                                               | 0=RESET \| 1=DRAIN \| 2=DRYOUT \| 3=EIB OFF \| 4=OFF \| 5=ON \| 6=STARTUP \| 7=TEST |
| AIRLOCK000054 | Airlock Pressure                                                            | {0:f2}                                             |
| AIRLOCK000055 | Airlock Hi P O2 Tank Pressure                                               | {0:f1}                                             |
| AIRLOCK000056 | Airlock Lo P O2 Tank Pressure                                               | {0:f1}                                             |
| AIRLOCK000057 | Airlock N2 Tank Pressure                                                    | {0:f1}                                             |
| NODE2000001  | Coolant water quantity (Node 2), MT                                          | {0:f1}                                             |
| NODE2000002  | Coolant water quantity (Node 2), LT                                          | {0:f1}                                             |
| NODE2000003  | Node 2 Air Conditioner State                                                 | 0=RESET \| 1=DRAIN \| 2=DRYOUT \| 3=EIB OFF \| 4=OFF \| 5=ON \| 6=STARTUP \| 7=TEST |
| NODE2000006  | Air Cooling Fluid Temp (Node 2)                                              | {0:f1}                                             |
| NODE2000007  | Avionics Cooling Fluid Temp (Node 2)                                         | {0:f1}                                             |
| NODE3000001  | Node 3 ppO2                                                                  | {0:f2}                                             |
| NODE3000002  | Node 3 ppN2                                                                  | {0:f2}                                             |
| NODE3000003  | Node 3 ppCO2                                                                 | {0:f2}                                             |
| NODE3000004  | Urine Processor State                                                        | 2=STOP \| 4=SHUTDOWN \| 8=MAINTENANCE \| 16=NORMAL \| 32=STANDBY \| 64=IDLE \| 128=SYSTEM INITIALIZED |
| NODE3000005  | Urine Tank Qty                                                               | {0:f1}                                             |
| NODE3000006  | Water Processor State                                                        | 1=STOP \| 2=SHUTDOWN \| 3=STANDBY \| 4=PROCESS \| 5=HOT SERVICE \| 6=FLUSH \| 7=WARM SHUTDOWN |
| NODE3000007  | Water Processor Step                                                         | 0=NONE \| 1=VENT \| 2=HEATUP \| 3=PURGE \| 4=FLOW \| 5=TEST \| 6=TEST_SV_1 \| 7=TEST_SV_2 \| 8=SERVICE |
| NODE3000008  | Waste Water Tank Qty                                                         | {0:f1}                                             |
| NODE3000009  | Clean Water Tank Qty                                                         | {0:f1}                                             |
| NODE3000010  | Oxygen Generator State                                                       | 1=PROCESS \| 2=STANDBY \| 3=SHUTDOWN \| 4=STOP \| 5=VENT_DOME \| 6=INERT_DOME \| 7=FAST_SHUTDOWN \| 8=N2_PURGE_SHUTDOWN |
| NODE3000011  | O2 Production rate                                                           | {0:f2}                                             |
| NODE3000012  | Avionics Cooling Fluid Temp (Node 3)                                         | {0:f1}                                             |
| NODE3000013  | Air Cooling Fluid Temp (Node 3)                                              | {0:f2}                                             |
| NODE3000017  | Coolant water quantity (Node 3)                                              | {0:f1}                                             |
| NODE3000018  | Node 3 Air Conditioner State                                                 | 0=RESET \| 1=DRAIN \| 2=DRYOUT \| 3=EIB OFF \| 4=OFF \| 5=ON \| 6=STARTUP \| 7=TEST |
| NODE3000019  | Coolant water quantity (Node 3)                                              | {0:f1}                                             |
| USLAB000053  | Lab ppO2                                                                     | {0:f2}                                             |
| USLAB000054  | Lab ppN2                                                                     | {0:f2}                                             |
| USLAB000055  | Lab ppCO2                                                                    | {0:f2}                                             |
| USLAB000056  | Coolant water quantity, LT (Lab)                                             | {0:f1}                                             |
| USLAB000057  | Coolant water quantity, MT (Lab)                                             | {0:f1}                                             |
| USLAB000058  | Cabin pressure                                                               | {0:f2}                                             |
| USLAB000059  | Cabin temperature                                                            | {0:f1}                                             |
| USLAB000060  | Avionics Cooling Fluid Temp (Lab)                                            | {0:f1}                                             |
| USLAB000061  | Air Cooling Fluid Temp (Lab)                                                 | {0:f2}                                             |
| USLAB000062  | Vacuum Resource System Valve Position                                        | 0=FAIL \| 1=OPEN \| 2=CLSD \| 3=TRNS                     |
| USLAB000063  | Vacuum Exhaust System Valve Position                                         | 0=FAIL \| 1=OPEN \| 2=CLSD \| 3=TRNS                     |
| USLAB000064  | Lab Port Air Conditioner State                                               | 0=RESET \| 1=DRAIN \| 2=DRYOUT \| 3=EIB OFF \| 4=OFF \| 5=ON \| 6=STARTUP \| 7=TEST |
| USLAB000065  | Lab Starboard Air Conditioner State                                          | 0=RESET \| 1=DRAIN \| 2=DRYOUT \| 3=EIB OFF \| 4=OFF \| 5=ON \| 6=STARTUP \| 7=TEST |

### ODIN

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| USLAB000082  | Standard Command Counter - Count of standard commands received by the ISS Command and Control Computer | {0:d0}                                             |
| USLAB000083  | Data Load Command Counter - Count of data load commands received by the ISS Command and Control Computer | {0:d0}                                             |
| USLAB000084  | ISS Command and Control Multiplexer/Demultiplexer Onboard Time (course)     | %sT                                                |
| USLAB000085  | ISS Command and Control Multiplexer/Demultiplexer Onboard Time (fine)       | {0:f7}                                             |
| USLAB000087  | # Laptops active and connected to the Primary Command and Control (C&C) Multiplexer/Demultiplexer (MDM) | {0:d0}                                             |

### SPARTAN

### SPARTAN

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| P1000001     | Loop B Pump Flowrate (kg/hr)                                                | {0:f1}                                             |
| P1000002     | Loop B PM Out Press (kPa)                                                   | {0:f1}                                             |
| P1000003     | Loop B PM Out Temp (deg C)                                                  | {0:f1}                                             |
| P4000001     | Photovolatic Control Unit (PVCU) - Solar Array - 2A - Drive Voltage         | {0:f1}                                             |
| P4000002     | Photovolatic Control Unit (PVCU) - Solar Array - 2A - Drive Current         | {0:f2}                                             |
| P4000004     | Photovolatic Control Unit (PVCU) - Solar Array - 4A - Drive Voltage         | {0:f1}                                             |
| P4000005     | Photovolatic Control Unit (PVCU) - Solar Array - 4A - Drive Current         | {0:f2}                                             |
| P4000007     | Photovolatic Control Unit (PVCU) - Solar Array - 2A - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| P4000008     | Photovolatic Control Unit (PVCU) - Solar Array - 4A - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| P6000001     | Photovolatic Control Unit (PVCU) - Solar Array - 4B - Drive Voltage         | {0:f1}                                             |
| P6000002     | Photovolatic Control Unit (PVCU) - Solar Array - 4B - Drive Current         | {0:f2}                                             |
| P6000004     | Photovolatic Control Unit (PVCU) - Solar Array - 2B - Drive Voltage         | {0:f1}                                             |
| P6000005     | Photovolatic Control Unit (PVCU) - Solar Array - 2B - Drive Current         | {0:f2}                                             |
| P6000007     | Photovolatic Control Unit (PVCU) - Solar Array - 4B - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| P6000008     | Photovolatic Control Unit (PVCU) - Solar Array - 2B - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| S1000001     | Loop A Pump Flowrate (kg/hr)                                                | {0:f1}                                             |
| S1000002     | Loop A PM Out Press (kPa)                                                   | {0:f1}                                             |
| S1000003     | Loop A PM Out Temp (deg C)                                                  | {0:f1}                                             |
| S4000001     | Photovolatic Control Unit (PVCU) - Solar Array - 1A - Drive Voltage         | {0:f1}                                             |
| S4000002     | Photovolatic Control Unit (PVCU) - Solar Array - 1A - Drive Current         | {0:f2}                                             |
| S4000004     | Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Voltage         | {0:f1}                                             |
| S4000005     | Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Current         | {0:f2}                                             |
| S4000007     | Photovolatic Control Unit (PVCU) - Solar Array - 1A - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| S4000008     | Photovolatic Control Unit (PVCU) - Solar Array - 3A - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| S6000001     | Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Voltage         | {0:f1}                                             |
| S6000002     | Photovolatic Control Unit (PVCU) - Solar Array - 3B - Drive Current         | {0:f2}                                             |
| S6000004     | Photovolatic Control Unit (PVCU) - Solar Array - 1B - Drive Voltage         | {0:f1}                                             |
| S6000005     | Photovolatic Control Unit (PVCU) - Solar Array - 1B - Drive Current         | {0:f2}                                             |
| S6000007     | Photovolatic Control Unit (PVCU) - Solar Array - 3B - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |
| S6000008     | Photovolatic Control Unit (PVCU) - Solar Array - 1B - Beta Gimble Assembly (BGA) Position (degrees) | {0:f1}                                             |


### VVO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| RUSSEG000001 | Russian Segment Station Mode - Service Module (SM)                          | 1=Crew Rescue \| 2=Survival \| 3=Reboost \| 4=Proximity Operations \| 5=EVA \| 6=Microgravity \| 7=Standard |
| RUSSEG000002 | First Kurs Equipment Kit Operating                                          | 0=Undetermined State \| 1=SM KURS Equipment Set1 Operating-RS |
| RUSSEG000003 | Second Kurs Equipment Kit Operating                                         | 0=Undetermined State \| 1=SM KURS Equipment Set2 Operating-RS |
| RUSSEG000004 | Service Module Kurs P1, P2 Failure - Russian Segment                        | 0=Undeterminated State \| 1=SM KURS P1, P2 Failure-RS |
| RUSSEG000005 | Distance from Service Module (SM) Kurs (Range)                              | {0:d0}                                             |
| RUSSEG000006 | Rate from Service Module (SM) Kurs (Range Rate)                             | {0:f2}                                             |
| RUSSEG000007 | Service Module (SM) Kurs-P Test Mode - Russian Segment                      | 0=Undetermined State \| 1=SM KURS-P Test Mode-RS     |
| RUSSEG000008 | Service Module (SM) Kurs-P "Capture" Signal Availability                    | 0=Undetermined State \| 1=SM KURS-P Capture Signal -RS |
| RUSSEG000009 | Service Module (SM) Kurs-P Target Acquisition Signal - Russian Segment      | 0=Undetermined State \| 1=SM KURS-P Target Acquisition Signal-RS |
| RUSSEG000010 | Service Module (SM) Kurs-P Functional Mode Signal - Russian Segment         | 0=Undetermined State \| 1=SM KURS-P Functional Mode Signal-RS |
| RUSSEG000011 | Service Module (SM) Kurs-P Standby Mode - Russian Segment                   | 0=Undetermined State \| 1=SM KURS-P In Standby Mode-RS |
| RUSSEG000012 | Service Module Docking Flag                                                 | 0=Undetermined State \| 1=SM Docking Flag-RS         |
| RUSSEG000013 | Service Module (SM) Forward Docking Port Engaged                            | 0=Undetermined State \| 1=SM Docking Port Engaged from Xfer Side-RS |
| RUSSEG000014 | Service Module (SM) Aft Docking Port Engaged                                | 0=Undetermined State \| 1=SM Docking Port Engaged from Instr Compartment Side-RS |
| RUSSEG000015 | Service Module (SM) Nadir (Down-looking) Docking Port Engaged - Along Y-Axis | 0=Undetermined State \| 1=SM Docking Port Engaged Below (along SM -Y Axis)-RS |
| RUSSEG000016 | Functional Cargo Block (FGB) Nadir (Down-looking) Docking Port Engaged - Along Y-Axis | 0=Undetermined State \| 1=FGB Bottom Docking Port Engaged (along SM -Y Axis)-RS |
| RUSSEG000017 | Service Module (SM) Nadir (Down-looking) Universal Docking Module (UDM) Docking Port Engaged - Along Y-Axis | 0=Undetermined State \| 1=SM Bottom UDM Docking Port Engaged (along SM -Y Axis)-RS |
| RUSSEG000018 | Mini Research Module (MRM) 1 Docking Port Engaged - Russian Segment         | 0=Undetermined State \| 1=MRM1 Docking Port Engaged-RS |
| RUSSEG000019 | Mini Research Module (MRM) 2 Docking Port Engaged - Russian Segment         | 0=Undetermined State \| 1=MRM2 Docking Port Engaged-RS |
| RUSSEG000020 | Service Module - Docked Vehicle Hooks Closed - Russian Segment              | 0=Undetermined State \| 1=Docked Vehicle Hooks Closed-RS |
| RUSSEG000021 | Service Module - Russian Guidance, Navigation, and Control - Active Attitude Mode - Russian Segment | 0=Inertial Attitude \| 1=LVLH SM \| 2=Solar Orientation \| 3=Current LVLH \| 4=Current Inertial Attitude \| 5=Damping \| 6=TEA \| 7=X-POP |
| RUSSEG000022 | Service Module - Russian Guidance, Navigation, and Control - Motion Control - Russian Segment | 0=Undetermined State \| 1=SM SUDN Controls the Motion (RS master)-RS |
| RUSSEG000023 | Service Module - Russian Guidance, Navigation, and Control - Prepared to Free Drift Mode Transition - Russian Segment | 0=Undetermined State \| 1=SM SUDN Prepared to Free Drift Mode Transition-RS |
| RUSSEG000024 | Service Module - Russian Guidance, Navigation, and Control - Thruster Operation Mode Terminated - Russian Segment | 0=Pre-Starting Procedure Or Thruster Operation Readiness \| 1=Thruster Operation Mode is Terminated |
| S0000005     | Solar Alpha Rotary Joint (SARJ) Port Joint Angle Commanded Position (degrees) | {0:f2}                                             |
| S0000006     | External Thermal Control System (ETCS) - Thermal Radiator Rotating Joint (TRRJ) - Loop B - Software mode | 1=STANDBY \| 2=RESTART \| 3=CHECKOUT \| 4=DIRECTED_POSITION \| 5=AUTOTRACK \| 6=BLIND \| 7=SHUTDOWN \| 8=SWITCHOVER |
| S0000007     | External Thermal Control System (ETCS) - Thermal Radiator Rotating Joint (TRRJ) - Loop A - Software mode | 1=STANDBY \| 2=RESTART \| 3=CHECKOUT \| 4=DIRECTED_POSITION \| 5=AUTOTRACK \| 6=BLIND \| 7=SHUTDOWN \| 8=SWITCHOVER |
| S0000008     | External Primary Solar Alpha Rotary Joint (SARJ) Port Mode                  | 1=STANDBY \| 2=RESTART \| 3=CHECKOUT \| 4=DIRECTED_POSITION \| 5=AUTOTRACK \| 6=BLIND \| 7=SHUTDOWN \| 8=SWITCHOVER |
| S0000009     | External Primary Solar Alpha Rotary Joint (SARJ) Starboard Mode             | 1=STANDBY \| 2=RESTART \| 3=CHECKOUT \| 4=DIRECTED_POSITION \| 5=AUTOTRACK \| 6=BLIND \| 7=SHUTDOWN \| 8=SWITCHOVER |
| USLAB000081  | Attitude Maneuver In Progress status                                        | 0=FALSE \| 1=TRUE                                     |

### ADCO/TOPO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| USLAB000032  | US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - X (km) | {0:f9}                                             |
| USLAB000033  | US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Y (km) | {0:f9}                                             |
| USLAB000034  | US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Z (km) | {0:f9}                                             |
| USLAB000035  | US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - X (m/s) | {0:f9}                                             |
| USLAB000036  | US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Y (m/s) | {0:f9}                                             |
| USLAB000037  | US Guidance, Navigation and Control (GNC) J2000 Propagated State Vector - Z (m/s) | {0:f9}                                             |

### ADCO/VVO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| RUSSEG000025 | Service Module - Russian Guidance, Navigation, and Control - Current Dynamic Mode - Russian Segment | 0=0 - Reserv \| 1=1 - Thrusters \| 2=2 - Gyrodines \| 3=3 - Gyrodines with Desaturation on American Method \| 4=4 - Gyrodines with Desaturation on Russian Method \| 5=5 - Translational Thrusters Operating \| 6=6 - Thrusters help CMG (desaturate CMG) \| 7=7 - Free Drift Mode |
| USLAB000010  | Control Moment Gyroscope (CMG) Momentum Percentage (%)                      | {0:f2}                                             |
| USLAB000012  | US Guidance, Navigation and Control (GNC) Mode                              | 0=Default \| 1=WAIT \| 2=RESERVED \| 3=STANDBY \| 4=CMG ATTITUDE CONTROL \| 5=CMG/THRUSTER ASSIST ATTITUDE CONTROL \| 6=USER DATA GENERATION \| 7=FREEDRIFT |

### CATO/VVO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| S1000005     | S-Band Radio Frequency Group (RFG 1) Elevation Gimbal Position              | {0:f2}                                             |

### ODIN/VVO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| USLAB000086  | ISS Station Mode                                                            | 1=Standard \| 2=Microgravity \| 4=Reboost \| 8=Proximity_Ops \| 16=External_Ops \| 32=Survival \| 64=ASCR \| 127=all_modes |

### SPARTAN/VVO

### SPARTAN/VVO

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| S0000001     | Starboard Thermal Radiator Rotating Joint (TRRJ) Position (degrees)         | {0:f1}                                             |
| S0000002     | Port Thermal Radiator Rotating Joint (TRRJ) Position (degrees)              | {0:f1}                                             |
| S0000003     | Solar Alpha Rotary Joint (SARJ) Starboard Joint Angle Position (degrees)    | {0:f2}                                             |
| S0000004     | Solar Alpha Rotary Joint (SARJ) Port Joint Angle Position (degrees)         | {0:f2}                                             |

### N/A

| Key          | Description                                                                 | Property Type                                      |
|--------------|-----------------------------------------------------------------------------|----------------------------------------------------|
| TIME_000001  | Greenwich Mean Time (GMT)                                                   | %mT                                                |
| TIME_000002  | Year                                                                        | {0:d0}                                             |
