const assert = require('chai').assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns 1 for 'Jason'", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});