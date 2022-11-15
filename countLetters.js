// countLetters in a string ignoring spaces
const countLetters = function(stringValue) {
  const result = {};
  
  const noSpaceString = stringValue.replace(/ /g, "");

  for (let letter of noSpaceString) {
    
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

module.exports = countLetters;