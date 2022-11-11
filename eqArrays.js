const eqObjects = require("./eqObjects");

//eqArray Function takes two arrays and checks that they are equal
const eqArrays = function(actual, expected) {
  let trueOrFalse = true;
  // check to see that they are not underfined
  if (actual === undefined || expected === undefined) {
    trueOrFalse = false;
  }
  const returnTruth = function(actualA, expectedA) {
  // check to make sure they are arrays and not objects
    if ((Object.prototype.toString.call(actualA) !== "[object Array]") || (Object.prototype.toString.call(actualA) !== "[object Array]")) {
      trueOrFalse = false;
    }

    // check to see if their lengths are equal
    if (actualA.length !== expectedA.length) {
      trueOrFalse = false;
    }

  
    // count through the given array arguments and if there is anything that doesn't match up - return false
    for (let i in actualA) {

      console.log(actualA[i], expectedA[i]);


      // check to see that the index is an object
      if (Object.prototype.toString.call(actualA[i]) === "[object Object]") {
        if (!eqObjects(actualA[i], expectedA[i])) {
          trueOrFalse = false;
        }
        i++;
      }
      if (Array.isArray(actualA[i])) {
        returnTruth(actualA[i], expectedA[i]);
      } else if (actualA[i] !== expectedA[i]) {
        trueOrFalse = false;
      }
    }
  };
  returnTruth(actual, expected);
  return trueOrFalse;
};

module.exports = eqArrays;