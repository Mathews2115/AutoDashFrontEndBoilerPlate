"use strict";

const dataWorker = new Worker(
  new URL("./js/comms/drawDataWorker.js", import.meta.url)
);
let updateData = []; // TODO: make this a typed array?  try transfer data in worker?
let readyForData = true;

const tick = () => {
  if (readyForData) {
    dataWorker.postMessage({
      msg: "process_update_data",
      updateData: updateData,
    });
    readyForData = false;
  }
  requestAnimationFrame(tick);
};

const initializeApp = () => {
  // start worker thread! (this lil thing gets the data that is sent from the AutoDashBackEnd)
  dataWorker.postMessage({ msg: "start" });

  // hook up update loop (responsible for updating the graphics!)
  tick();
};

dataWorker.onmessage = (event) => {
  switch (event.data.msg) {
    case "update_data_ready":
      try {
        // data is ready, do the animation and request another update frame
        updateData = event.data.updateData;
        readyForData = true;
      } catch (error) {
        console.error(error);
        // put state to error?
      }

      break;
    case "error":
      // put to state error?
      // dash.errorOccured();
      break;
  }
};

initializeApp();
