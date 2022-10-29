// findKey takes in and object and a callback, returns the first that returns true
const findKey = function(obj, callback) {
  
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

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

//tests

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  Mike: 45,
  Sandra: 45,
  Isaiah:18,
  Juno:15
}, n => n < 18), "Juno");

assertEqual(findKey({
  Mike: {Age: 45, Role: "Papa"},
  Sandra: {Age:45, Role: "Mama"},
  Isaiah: {Age:18, Role: "Son"},
  Juno: {Age:15, Role: "Daughter"}
}, n => n.Role === "Son"), "Isaiah");

assertEqual(findKey({
  Mike: {Age: 45, Role: "Papa", Hobby: ["F1", "Reading"]},
  Sandra: {Age:45, Role: "Mama", Hobby: ["Reading", "Gardening"]},
  Isaiah: {Age:18, Role: "Son", Hobby: ["Cars", "Star Wars"]},
  Juno: {Age:15, Role: "Daughter", Hobby: ["Dancing", "TV"]}
}, n => n.Hobby[0] ===  "Reading"), "Sandra");