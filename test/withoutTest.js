const without = require("../without");
const assert = require('chai').assert;


// mocha tests
describe("#without", () => {
  
  it("returns [1,2] for [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1,2]);
  });
  
  it("returns ['1','2'] for [1, 2, '3']", () => {
    assert.deepEqual(without([1, 2,'3'], ['3']), [1,2]);
  });

});