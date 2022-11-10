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

module.exports = takeUntil;

