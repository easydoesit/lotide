// Takes two objects and compares them, output to the console.
const assertObjectEqual = function(actual, expected) {
  //messages
  const errorMessage = "🔴🔴🔴 Assertion Failed:";
  const successMessage = "✅✅✅ Assertion Passed:";

  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${successMessage} ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${errorMessage} ${inspect(actual)} !== ${inspect(expected)}`);
  }

};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // compare the objects sizes
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // count through both objects and compare key-value pairs
  for (let key of Object.keys(object1)) {
    // if the value is an array
    if (Array.isArray(object1[key])) {
      // if the arrays are differints
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(argsArray1, argsArray2) {

  // check to see that they are not underfined
  if (argsArray1 === undefined || argsArray2 === undefined) {
    return false;
  }

  // check to make sure they are arrays and not objects
  if ((Object.prototype.toString.call(argsArray1) !== "[object Array]") || (Object.prototype.toString.call(argsArray1) !== "[object Array]")) {
    return false;
  }

  // check to see if arrays are empty
  if ((argsArray1.length === 0 && argsArray2.length > 0) || (argsArray1.length > 0 && argsArray2.length === 0)) {
    return false;
  }

  // check to see if their lengths are equal
  if (argsArray1.length !== argsArray2.length) {
    return false;
  }

  // count through the given array arguments and if there is anything that doesn't match up - return false
  for (let i in argsArray1) {
    if (argsArray1[i] !== argsArray2[i]) {
      return false;
    }
  }
  
  return true;
};

assertObjectEqual({},{});
assertObjectEqual({Name: "Mike", Age: 45}, {Name: "Sandra", Age: 44});
assertObjectEqual({Famil: ["Michael", "Sandra", "Isaiah", "Juno"]}, {Family: ["Michael", "Sandra", "Isaiah", "Juno"]});
assertObjectEqual({Family: ["Michael", "Sandra", "Isaiah", "Juno"], friends: ["Alex", "Jina", "Corey", "Sam"]}, {Family: ["Michael", "Sandra", "Isaiah", "Juno"], friends: ["Alex", "Jina", "Corey", "Sam"]});
