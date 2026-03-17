const UniqueIdgenerator = require('./generator')
const {encode} = require ('./base62');
const { decodeId } = require("./decode");
const autoMachineId = require('./machineId');

const generator = new UniqueIdgenerator(autoMachineId());

function generateId(){
  const id = generator.generate();
  return encode(id);
}

module.exports = {
  generateId,
  decodeId,
  UniqueIdgenerator
};