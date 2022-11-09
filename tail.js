// tail function to get all the array indexes after 0.
const tail = function(argsArray) {
  //check to see if their is anything in the array. If not return undefined which also equals 0.
  if (argsArray === undefined) {
    return undefined;
  }
  //return the new tail array sliced from the original array.
  const tailArray = argsArray.slice(1);
  return tailArray;
};

module.exports = tail;