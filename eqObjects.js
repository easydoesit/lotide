
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Check for undefined
  if (object1 === undefined || object2 === undefined) {
    return false;
  }

  //compare the objects sizes
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  // count through both objects and compare key-value pairs
  for (let key of Object.keys(object1)) {
    // if the value is an array
    if (Array.isArray(object1[key])) {
      // if the arrays are different
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;