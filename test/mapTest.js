const map = require("../map");
const assert = require('chai').assert;

// mocha tests
describe("#without", () => {

  const words = ["ground", "control", "to", "major", "tom"];
  const speeds = [30, 50, 80, 110];

  const countThroughString = function(sentence) {
    let capital = sentence[0];
    capital = capital.toUpperCase();
    sentence = capital + sentence.slice(1);
    return sentence;
  };
  
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
  });
  
  it("returns [40, 60, 90, 120] for [30, 50, 80, 110]", () => {
    assert.deepEqual(map(speeds, speed => speed + 10), [40, 60, 90, 120]);
  });

  it("returns ['Mike', 'Sandra','Juno','Isaiah'] for ['mike', 'sandra', 'juno', 'isaiah']", () => {
    assert.deepEqual(map(['mike', 'sandra', 'juno', 'isaiah'], name => `${countThroughString(name)}`), ['Mike', 'Sandra','Juno','Isaiah']);
  });

  it("returns [1, 4, 9, 16, 25] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num  => num * num), [1, 4, 9, 16, 25]);
  });

});
