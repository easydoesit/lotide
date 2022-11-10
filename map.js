// map takes in an array and any other callback argument
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};
module.exports = map;