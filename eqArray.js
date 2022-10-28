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

// Compare two numbers/strings and ensure they are the same.
const assertEqual = function(actual, expected) {
  //emojies
  const emoji = require('node-emoji');
  const alert = emoji.get('x');
  const pass = emoji.get('white_check_mark');
  
  //messages
  const errorMessage = alert + alert + alert + " Assertion Failed:";
  const successMessage = pass + pass + pass + " Assertion Passed:";

  //comparison
  if (actual === expected) {
    console.log(`${successMessage} ${actual} === ${expected}`);
  } else {
    console.log(`${errorMessage} ${actual} !== ${expected}`);
  }
};

//test case numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

//test case strings and numbers
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//test case variables and strings
const Tim = "Tim";
const George = "George";
const Bob = "Bob";
const Nik = "Nik";

assertEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Bob]), true);
assertEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Nik]), false);