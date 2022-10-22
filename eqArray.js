const eqArrays = function(argsArray1, argsArray2) {
  let compare = true;
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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true));

const Tim = "Tim";
const George = "George";
const Bob = "Bob";
const Nik = "Nik";

console.log(assertEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Bob]), true));
console.log(assertEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Nik]), true));