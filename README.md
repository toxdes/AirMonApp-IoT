# AirMonApp-Internet of Things
A small weather app created using react-native to show the data fetched from Firebase and UbiDots(Internet of Things Platform).
<br>Demo of the working app (video) : [Here](https://youtu.be/vusiBQ-YPzQ)
## Firebase And UbiDots config
1. Create a firebase project, goto project overview, and select ```Add Firebase to your Web App```.
2. Put the config object to the ```/src/Config/dbconstants.js``` file.
3. Goto UbiDots and get token, variable-names, and device-names and place them accordingly in api.js.
<br><br>
This app gets values of sensors uploaded to UbiDots and firebase, from NodeMCU. The code for NodeMCU is in [NodeMCU repository](https://github.com/toxdes/AirMonApp-Arduino-IoT).  
