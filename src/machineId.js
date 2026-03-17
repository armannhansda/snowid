const os = require('os');

function autoMachineId(){
  const hostname = os.hostname();
  let hash = 0;

  for(let i =0; i<hostname.length; i++){
    hash = (hash*31 + hostname.charCodeAt(i)) >>> 0;
  }
 
  return hash % 64;  // because machineId = 6 bits
}

module.exports = autoMachineId;