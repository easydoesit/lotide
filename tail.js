// tail function to get all the array indexes after 0.
const tail = function(argsArray) {
  //check to see if their is anything in the array. If not return undefined which also equals 0.
  if (argsArray === undefined) {
    return undefined;
  }
  //return the new tail array sliced from the original array.
  const tailArray = argsArray.slice(1);
  return tailArray;
};

//Function Implementation
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

// Test Case 1. Did the tail function work as planned?
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log("length? " + assertEqual(result.length,2));
console.log("Element 1? " + assertEqual(result[0], "Lighthouse"));
console.log("Element 2?" + assertEqual(result[1], "Labs"));
const single = tail([1]);
console.log("Single Array?" + assertEqual(single.length, 0));
const empty = tail([]);
console.log("Empty Array?" + assertEqual(empty.length, 0));

// Test Case 2. Did we keep the original array?
const words = ["Yo Yo", "lighthouse", "Labs"];
tail(words);
console.log("Original Array?" + assertEqual(words.length, 3));