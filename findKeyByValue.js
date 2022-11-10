// findKeyByValue takes and object and a value. It scans the object and returns the first key which contains the value
const findKeyByValue = function(scanObject, value) {
  
  for (let key in scanObject) {
    if (scanObject[key] === value) {
      return key;
    }
  }

};

module.exports = findKeyByValue;
