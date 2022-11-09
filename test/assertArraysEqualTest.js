const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");

//test case numbers
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);

//test case strings and numbers
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false);

//test case variables and strings
const Tim = "Tim";
const George = "George";
const Bob = "Bob";
const Nik = "Nik";


assertEqual(assertArraysEqual(["Tim", "George", "Bob"], [Tim, George, Bob]), true);
assertEqual(assertArraysEqual(["Tim", "George", "Bob"], [Tim, George, Nik]), false);
