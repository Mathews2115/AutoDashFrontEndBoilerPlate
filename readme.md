# Boiler Plate
* Just something to get you up and running
* Includes all the linkage to the AutoDashBackEnd 
* Tach display

# How to use 
## on desktop
1. `npm run start` - this will build the assets and launch a web browser
2. if you want live data, on AutoDashBack end, run `npm run init_and_start_vcan_server`
3. then run `canplayer vcan0=can0  -I ./can_dumps/candump-racepack-running.log -li`
   
## on pi
1. `npm run build` - this builds the assets and stores them in the `/dist`
2. You'll need the AutoDashBackEnd - copy the contents of this `/dist` folder and paste it into the `/dist` folder of the AutoDashBackEnd on the pi
  
# Quick How-To Raspberry Pi 4 Digital Dashboard setup.

See https://github.com/Mathews2115/AutoDashBackEnd for HW setup.
![PXL_20210808_010642720](https://user-images.githubusercontent.com/6019208/137767974-98e20b2d-bba4-46e8-9bb6-8a72e7661554.jpg)
![image](https://user-images.githubusercontent.com/6019208/158074179-590af39a-7693-4a5f-8d57-f5f967207406.png)

