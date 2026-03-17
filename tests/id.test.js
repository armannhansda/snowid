const { generateId } = require('../src');


test("IDs should be unique", ()=>{
  const ids = new Set();

  for(let i = 0; i< 10000; i++){
    const id = generateId();
    expect(ids.has(id)).toBe(false);
    ids.add(id);
  }
});