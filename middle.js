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

module.exports = middle;