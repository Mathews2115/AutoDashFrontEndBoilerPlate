let tachHand = null;

// MAX RPM in gauge
const maxRPM = 8000;

//////// rotation degree of sweep needle:
// const offset = 264;
// degree when engine off
const offSweep = 96;
// degree @ 0 RPMs
const minSweep = 116;
// degree @ 8K RPMS 
const maxSweep = 402;

export default {
  initialize: () => {
    tachHand = document.getElementById("tach_needle");
    tachHand.style.transform = `rotate(${offSweep}deg)`;
  },
  update: (rpm, noComm) => {
    if (noComm) {
      // error communicating to the ECU handler
      tachHand.style.transform = `rotate(${offSweep}deg)`;
      return
    }

    // set rotation of hand
    tachHand.style.transform = `rotate(${(rpm / maxRPM) * (maxSweep - minSweep) + minSweep}deg)`;
  },
};