# Boiler Plate
* Just something to get you up and running
* Includes all the linkage to the [AutoDashBackEnd](https://github.com/Mathews2115/AutoDashBackEnd) 
* Tach display

# How to use 
## on desktop
1. `yarn` - build everything
1. `npm run start` - this will build the assets and launch a web browser
2. if you want live data, on [AutoDashBackEnd](https://github.com/Mathews2115/AutoDashBackEnd) end, run `npm run init_and_start_vcan_server`
3. then run `canplayer vcan0=can0  -I ./can_dumps/candump-racepack-running.log -li`
   
## on pi
1. `npm run build` - do this on your computer; this builds the assets and stores them in the `/dist`
2. You'll need the [AutoDashBackEnd](https://github.com/Mathews2115/AutoDashBackEnd) - copy the contents of this `/dist` folder and paste it into the `/dist` folder of the AutoDashBackEnd on the pi
  
# Quick How-To Raspberry Pi 4 Digital Dashboard setup.

See https://github.com/Mathews2115/AutoDashBackEnd for HW setup.
![tachExample](https://user-images.githubusercontent.com/6019208/170778385-1c82e211-223f-40ad-9532-145caa175b04.png)
![tach_no_function](https://user-images.githubusercontent.com/6019208/170778391-98ea6d7f-a75d-4c58-b52a-5491184851b5.png)
