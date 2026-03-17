const {generateId} = require('../src');



test("IDs should be in chronological order",()=>{

  const ids = [];

  for(let i =0; i<20; i++){
    ids.push(generateId());
  }

  const sorted = [...ids].sort();

  expect(ids).toEqual(sorted);
});

