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

module.exports = without;
