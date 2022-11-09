//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(actual, expected) {

  // check to see that they are not underfined
  if (actual === undefined || expected === undefined) {
    return false;
  }

  // check to make sure they are arrays and not objects
  if ((Object.prototype.toString.call(actual) !== "[object Array]") || (Object.prototype.toString.call(actual) !== "[object Array]")) {
    return false;
  }

  // check to see if their lengths are equal
  if (actual.length !== expected.length) {
    return false;
  }

  // count through the given array arguments and if there is anything that doesn't match up - return false
  for (let i in actual) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  
  return true;
};

module.exports = eqArrays;
