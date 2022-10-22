//without Function takes an Array in the first argument and the items to be removed as the second argument
const without = function(sourceArray, itemsToBeRemoved) {
  //create a newArray based on the SourceArray
  let newArray = sourceArray;

  //count through the items in the sourceArray
  for (let i in newArray) {
    //for each item in the NewArray count through the items to be removed
    for (let j in itemsToBeRemoved) {
      // the itemsToBeRemoved is the same as the sourceArray...
      if (itemsToBeRemoved[j] === sourceArray[i]) {
        //remove the item
        newArray.splice(i,1);
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

//test case remove numbers
console.log(assertEqual(eqArrays(without([1, 2, 3], [1]) [1, 2]), true));
console.log(assertEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]) ["1", "2"]), true));

//test case with variables
const testVar = [1, 2, 3];
const testRmVar = [1];
const testVar2 = ["Me", "Myself", "Irene"];
const testRmVar2 = ["Irene"];

console.log(assertEqual(eqArrays(without(testVar, testRmVar)[1, 2]), true));
console.log(assertEqual(eqArrays(without(testVar2, testRmVar2)["Me", "Myself"]), true));

// test case with variables in the array
const bob = "Bob";
const jen = "Jen";
const joe = "joe";

console.log(assertEqual(eqArrays(without([bob, jen, joe],[jen, joe])["Bob"]),true));
