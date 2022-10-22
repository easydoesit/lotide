// flatten function takes in 1 array with 1 level of nesting.
const flatten = function(argsArray) {
  //make a newArray to return
  let newArray = [];
  //loop through all the elements in the array and check if they are nested arrays
  for (let i in argsArray) {
    let result = Array.isArray(argsArray[i]);
    // if the result is false then push to the newArray
    if (!result) {
      newArray.push(argsArray[i]);
    } else {
      // if the result is true then make a new array out of it
      const nested = argsArray[i];
      //loop throught the nested Array and push each item to newArray
      for (let j in nested) {
        newArray.push(nested[j]);
      }
    }
  }
  return newArray;
};

//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(argsArray1, argsArray2) {
  let compare = true;
  // count through the given array arguments and if there is anything that doesn't match up - return false
  for (let i in argsArray1) {
    if (argsArray1[i] !== argsArray2[i]) {
      compare = false;
      return compare;
    }
  }
  return compare;
};

//AssertEqual Implementation
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
    return `${successMessage} ${actual} === ${expected}`;
  } else {
    return `${errorMessage} ${actual} !== ${expected}`;
  }
};

//test cases
console.log(assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]),true));
console.log(assertEqual(eqArrays(flatten(["Im", "a", ["happy", "happy", "happy"], "dog"]),["Im", "a", "happy", "happy", "happy", "dog"]), true));
