const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

// mocha tests
describe("#letterPositions", () => {
  
  it("returns [1] for 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e,[1]);
  });
  
  it("returns [2,3] for 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]);
  });

});