const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

//test case numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

//test case strings and numbers
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//test case variables and strings
const Tim = "Tim";
const George = "George";
const Bob = "Bob";
const Nik = "Nik";

assertEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Bob]), true);
assertEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Nik]), false);