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

console.log(countLetters("a bb ccc"));
console.log(countLetters("This could be a useful function"));
