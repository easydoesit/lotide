// Compare two numbers/strings and ensure they are the same.
const assertEqual = function(actual, expected) {
  //messages
  const errorMessage = "🔴🔴🔴  Assertion Failed:";
  const successMessage = "✅✅✅ Assertion Passed:";

  //comparison
  if (actual === expected) {
    console.log(`${successMessage} ${actual} === ${expected}`);
  } else {
    console.log(`${errorMessage} ${actual} !== ${expected}`);
  }
};

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);