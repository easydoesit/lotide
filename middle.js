//middle takes in an array and returns the middle indexes
const middle = function(argsArray) {
  let newArray = [];
  //if the array is smaller than three there can be no middle - return empty
  if (argsArray.length < 3) {
    return newArray;
  }
  
  //if the argsArray is odd
  if (argsArray.length % 2 !== 0) {
    let Selection = Math.floor(argsArray.length / 2);
    newArray.push(argsArray[Selection]);
    return newArray;
  }

  //if the argsArray is even
  if (argsArray.length % 2 === 0) {
    let Selection = (argsArray.length / 2) - 1;
    newArray.push(argsArray[Selection]);
    newArray.push(argsArray[Selection + 1]);
    return newArray;
  }
};

//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(argsArray1, argsArray2) {
  let compare = true;

  // check to make sure they are arrays and not objects
  if ((Object.prototype.toString.call(argsArray1) !== "[object Array]") || (Object.prototype.toString.call(argsArray1) !== "[object Array]")) {
    compare = false;
    return compare;
  }
  
  // check to see if arrays are empty
  if ((argsArray1.length === 0 && argsArray2.length > 0) || (argsArray1.length > 0 && argsArray2.length === 0)) {
    compare = false;
    return compare;
  }
  // count through the given array arguments and if there is anything that doesn't match up - return false
  for (let i in argsArray2) {
    if (argsArray1[i] !== argsArray2[i]) {
      compare = false;
      return compare;
    }
  }
  return compare;
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

//tests
assertEqual(eqArrays(middle([1]),[]),true);
assertEqual(eqArrays(middle([1]),[1]),false);
assertEqual(eqArrays(middle([1,2]),[]),true);
assertEqual(eqArrays(middle([1,4]),[2]),false);
assertEqual(eqArrays(middle([1,2,3]),[2]),true);
assertEqual(eqArrays(middle([1,2,3]),[3]),false);
assertEqual(eqArrays(middle(["Mic", "Tom", "Jer"]),["Tom"]),true);
assertEqual(eqArrays(middle(["Mic", "Tom", "Jer"]),["Mic"]),false);
assertEqual(eqArrays(middle([1,2,3,4,5,6]),[3,4]),true);
assertEqual(eqArrays(middle([1,2,3,4,5,6]),[4,3]),false);
assertEqual(eqArrays(middle(["Mic","Tom","Bri", "Bob", "Jer"]),["Bri"]),true);
assertEqual(eqArrays(middle(["Mic","Tom","Bri", "Bob", "Jer"]),["Tom"]),false);
