const findKey = require("../findKey");
const assert = require('chai').assert;

// mocha tests
describe("#findKey", () => {
  
  it("returns 'noma' for {\n 'Blue Hill': { stars: 1 },\n 'Akaleri':   { stars: 3 },\n'noma':      { stars: 2 },\n'elBulli':   { stars: 3 },\n'Ora':       { stars: 2 },\n'Akelarre':  { stars: 3 }\n}, x => x.stars === 2)", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  it("returns 'Juno' for {\nMike: 45,\nSandra: 45,\nIsaiah:18,\n Juno:15}, n => n < 18)", () => {
    assert.strictEqual(findKey({
      Mike: 45,
      Sandra: 45,
      Isaiah:18,
      Juno:15
    }, n => n < 18), "Juno");
  });
  
});