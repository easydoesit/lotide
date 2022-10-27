
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

// Compare two numbers/strings and ensure they are the same.
const assertEqual = function(actual, expected) {

  //messages
  const errorMessage = "🔴🔴🔴 Assertion Failed:";
  const successMessage = "✅✅✅ Assertion Passed:";

  //comparison
  if (actual === expected) {
    console.log(`${successMessage} ${actual} === ${expected}`);
  } else {
    console.log(`${errorMessage} ${actual} !== ${expected}`);
  }
};

//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(argsArray1, argsArray2) {

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({a: "1", b: "2", c:[1]}, {a: "1", b: "2", c:[2]}), false);