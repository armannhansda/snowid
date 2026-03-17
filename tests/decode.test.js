const { generateId } = require('../src')

const { parseId} = require('../src/decode');

test("should decode id correctly", ()=>{
  const id = generateId();

  const result = parseId(id);

  expect(result).toHaveProperty("timestamp");
  expect(result).toHaveProperty("machineId");
  expect(result).toHaveProperty("sequence");
  
});
