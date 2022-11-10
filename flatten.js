// flatten function takes in 1 array with 1 level of nesting.
const flatten = function(argsArray) {
  //make a newArray to return
  let newArray = [];
  //loop through all the elements in the array and check if they are nested arrays
  for (let i in argsArray) {
    let result = Array.isArray(argsArray[i]);
    // if the result is false then push to the newArray
    if (!result) {
      newArray.push(argsArray[i]);
    } else {
      // if the result is true then make a new array out of it
      const nested = argsArray[i];
      //loop throught the nested Array and push each item to newArray
      for (let j in nested) {
        newArray.push(nested[j]);
      }
    }
  }
  return newArray;
};

module.exports = flatten;
