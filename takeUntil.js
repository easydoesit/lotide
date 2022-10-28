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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, -5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//console.log(data1.slice(0, 5));