const {generateId} = require('../src');

test("IDs should be unique", ()=>{
  const set = new Set();
  const COUNT = 5000;

  for(let i = 0; i< COUNT; i++){
    const id = generateId();
    if(set.has(id)){
      console.log('Duplicate ID found: ', id);
      process.exit(1);

    }
    set.add(id);
  }

});
