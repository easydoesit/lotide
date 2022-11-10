const takeUntil = require("../takeUntil");
const assert = require('chai').assert;


// mocha tests
describe("#takeUntil", () => {
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, -5];
  const results1 = takeUntil(data1, x => x < 0);

  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, -5]", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  
  it("returns ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwoo']", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });

});