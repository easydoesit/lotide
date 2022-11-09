// countLetters in a string ignoring spaces
const countLetters = function(stringValue) {
  const result = {};
  
  const noSpaceString = stringValue.replace(/ /g, "");

  for (let letter of noSpaceString) {
    
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
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

assertEqual(countLetters("a bb ccc").a, 1);
assertEqual(countLetters("This could be a useful function").u, 4);

module.export = countLetters;