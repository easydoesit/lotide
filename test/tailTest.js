const tail = require("../tail.js");
const assertEqual = require("../assertEqual");

// Test Case 1. Did the tail function work as planned?
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log("length? " + assertEqual(result.length,2));
console.log("Element 1? " + assertEqual(result[0], "Lighthouse"));
console.log("Element 2?" + assertEqual(result[1], "Labs"));
const single = tail([1]);
console.log("Single Array?" + assertEqual(single.length, 0));
const empty = tail([]);
console.log("Empty Array?" + assertEqual(empty.length, 0));

// Test Case 2. Did we keep the original array?
const words = ["Yo Yo", "lighthouse", "Labs"];
tail(words);
console.log("Original Array?" + assertEqual(words.length, 3));