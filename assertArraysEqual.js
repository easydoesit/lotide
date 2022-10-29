// Compare two arrays and log whether they are equal or not.
const assertArraysEqual = function(actual, expected) {
  //messages
  const errorMessage = "🔴🔴🔴 Assertion Failed:";
  const successMessage = "✅✅✅ Assertion Passed:";

  //comparison
  if (eqArrays(actual, expected)) {
    console.log(`${successMessage} ${actual} === ${expected}`);
  } else {
    console.log(`${errorMessage} ${actual} !== ${expected}`);
  }
};

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

//test case numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

//test case strings and numbers
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

//test case variables and strings
const Tim = "Tim";
const George = "George";
const Bob = "Bob";
const Nik = "Nik";


assertArraysEqual(["Tim", "George", "Bob"], [Tim, George, Bob]);
assertArraysEqual(["Tim", "George", "Bob"], [Tim, George, Nik]);