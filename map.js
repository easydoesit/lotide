// map takes in an array and any other callback argument
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};

// Compare two arrays and log whether they are equal or not.
const assertArraysEqual = function(actual, expected) {
  //messages
  const errorMessage = "🔴🔴🔴 Assertion Failed:";
  const successMessage = "✅✅✅ Assertion Passed:";

  //comparison
  if (eqArrays(actual, expected)) {
    console.log(`${successMessage} ${actual} === ${expected}`);
  } else {
    console.log(`${errorMessage} ${actual} !== ${expected}`);
  }
};

//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(argsArray1, argsArray2) {

  // check to see that they are not underfined
  if (argsArray1 === undefined || argsArray2 === undefined) {
    return false;
  }

  // check to make sure they are arrays and not objects
  if ((Object.prototype.toString.call(argsArray1) !== "[object Array]") || (Object.prototype.toString.call(argsArray1) !== "[object Array]")) {
    return false;
  }

  // check to see if arrays are empty
  if ((argsArray1.length === 0 && argsArray2.length > 0) || (argsArray1.length > 0 && argsArray2.length === 0)) {
    return false;
  }

  // check to see if their lengths are equal
  if (argsArray1.length !== argsArray2.length) {
    return false;
  }

  // count through the given array arguments and if there is anything that doesn't match up - return false
  for (let i in argsArray1) {
    if (argsArray1[i] !== argsArray2[i]) {
      return false;
    }
  }
  
  return true;
};


const words = ["ground", "control", "to", "major", "tom"];
const speeds = [30, 50, 80, 110];

// tests
const countThroughString = function(sentence) {
  let capital = sentence[0];
  capital = capital.toUpperCase();
  sentence = capital + sentence.slice(1);
  return sentence;
};


assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(speeds, speed => speed + 10), [40, 60, 90, 120]);
assertArraysEqual(map(['mike', 'sandra', 'juno', 'isaiah'], name => `${countThroughString(name)}`), ['Mike', 'Sandra','Juno','Isaiah']);
assertArraysEqual(map([1, 2, 3, 4, 5], num  => num * num), [1, 4, 9, 16, 25]);