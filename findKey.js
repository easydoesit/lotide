// findKey takes in and object and a callback, returns the first that returns true
const findKey = function(obj, callback) {
  
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;