const {decode} = require('./base62');

function parseId(id, epoch = 1735689600000n){
  const num = decode(id);
  const sequenceMask = (1n << 14n) -1n;
  const machineMask = (1n << 6n) -1n;

  const sequence = num & sequenceMask;

  const machineId = (num >> 14n) & machineMask;

  const timestamp = (num>> 20n) + epoch;

  return {
    timestamp : new Date(Number(timestamp)),
    machineId : Number(machineId),
    sequence : Number(sequence)
  };

}

module.exports = { parseId };