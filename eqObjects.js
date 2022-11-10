// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let check = true;
  // Check for undefined
  const compareObjects = function(object1, object2) {
    if (object1 === undefined || object2 === undefined) {
      check = false;
      return check;
    }

    //compare the objects sizes
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      check = false;
    }
  
    // count through both objects and compare key-value pairs
    for (let key of Object.keys(object1)) {
    // if the value is an array
      /*if (Array.isArray(object1[key])) { //TODO FOR LATER CHECK FOR ARRAYS CURRENTLY CIRCULAR DEPENDANCY
      // if the arrays are different
        if (!eqArrays(object1[key], object2[key])) {
          check = false;
        }
      } else */ if (Object.prototype.toString.call(object1[key]) === "[object Object]") {
        compareObjects(object1[key], object2[key]);

      } else if (object1[key] !== object2[key]) {
        check = false;
      }
    }
  };
  compareObjects(object1, object2);
  return check;
};

module.exports = eqObjects;