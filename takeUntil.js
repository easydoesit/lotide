// return the slice of an arry with the elements taken from the beginning, until callback/predicate is true
const takeUntil = function(array, callback) {
  let stopIndex = 0;
  
  array.forEach((element, index) => {

    if (stopIndex === 0 && callback(element)) {
      stopIndex = index;
      return;
    }
  });

  return array.slice(0, stopIndex);
  
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
const eqArrays = function(actual, expected) {

  // check to see that they are not underfined
  if (actual === undefined || expected === undefined) {
    return false;
  }

  // check to make sure they are arrays and not objects
  if ((Object.prototype.toString.call(actual) !== "[object Array]") || (Object.prototype.toString.call(actual) !== "[object Array]")) {
    return false;
  }

  // check to see if their lengths are equal
  if (actual.length !== expected.length) {
    return false;
  }

  // count through the given array arguments and if there is anything that doesn't match up - return false
  for (let i in actual) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  
  return true;
};

//tests

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, -5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);


