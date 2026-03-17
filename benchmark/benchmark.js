const {generateId} = require('../src');

const start = Date.now();

const COUNT =  1_000_000
for(let i = 0; i < COUNT;i++){
  generateId();
}

const end = Date.now();
const rate = Math.floor((COUNT / (end - start)) * 1000);

console.log(`generated: ${COUNT} ids`);
console.log(`time taken: ${end - start} ms`);

console.log("rate: ", rate, "ids/s");