//head function to get the first index of an array
const head = function(argsArray) {
  //make sure that there is something in the index.
  if (argsArray === undefined) {
    return `undefined`;
  }
  //if there is something there then return it.
  return argsArray[0];
};

module.exports = head;