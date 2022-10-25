//head function to get the first index of an array
const head = function(argsArray) {
  //make sure that there is something in the index.
  if (argsArray === undefined) {
    return `undefined`;
  }
  //if there is something there then return it.
  return argsArray[0];
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

console.log(assertEqual(head([5,6,7]),5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello"));
console.log(assertEqual(head(),5));
console.log(assertEqual(head([5]),5));