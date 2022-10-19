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
    return successMessage + " " + actual + " === " + expected;
  } else {
    return errorMessage + " " + actual + " !== " + expected;
  }
};



//Test Code
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1,1));