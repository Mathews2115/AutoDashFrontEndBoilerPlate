"use strict";
import { DATA_MAP, WARNING_KEYS } from "./js/common/dataMap";
import tachometer from "./js/tachometer";
import battery from "./js/battery";
const dataWorker = new Worker(
  new URL("./js/comms/drawDataWorker.js", import.meta.url)
);

let updateData = []; // TODO: make this a typed array?  try transfer data in worker?
let readyForData = true;
let isCommError = false; // True if there is an issue communicating with ECU server 

const tick = () => {
  if (readyForData) {
    dataWorker.postMessage({
      msg: "process_update_data",
      updateData: updateData,
    });
    readyForData = false;
  }

  // determine if we are still in communication with our server
  isCommError = getWarningLight(WARNING_KEYS.COMM_ERROR);
  
  // update stuff
  tachometer.update(updateData[DATA_MAP.RPM.id], isCommError);
  battery.update(updateData[DATA_MAP.HV_BATT_VOLTAGE.id], isCommError);

  // request another update frame
  requestAnimationFrame(tick);
};

const initializeApp = () => {
  // start worker thread! (this lil thing gets the data that is sent from the AutoDashBackEnd)
  dataWorker.postMessage({ msg: "start" });

  // start up our tach
  tachometer.initialize();
  battery.initialize();

  // start up update loop (responsible for updating the graphic positions!)
  tick();
};

const getWarningLight = (warningKey) => {
  return !!(updateData[DATA_MAP.WARNINGS.id] & (128 >> warningKey  % 8))
}

dataWorker.onmessage = (event) => {
  switch (event.data.msg) {
    case "update_data_ready":
      try {
        // data is ready, do the animation and request another update frame
        updateData = event.data.updateData;
        readyForData = true;
      } catch (error) {
        console.error(error);
      }

      break;
    case "error":
      // if you want some error handling
      break;
  }
};

initializeApp();
