// flatten function takes in 1 array with 1 level of nesting.
const flatten = function(argsArray) {
  //make a newArray to return
  let newArray = [];
  //loop through all the elements in the array and check if they are nested arrays
  const pushItems = function(array) {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        // Print out all it's items individually
        pushItems(item);
      } else {
        newArray.push(item);
      }
    });
  };
  pushItems(argsArray);
  return newArray;
};

module.exports = flatten;
