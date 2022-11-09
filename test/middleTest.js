const middle = require("../middle");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

//tests
assertEqual(eqArrays(middle([1]),[]),true);
assertEqual(eqArrays(middle([1]),[1]),false);
assertEqual(eqArrays(middle([1,2]),[]),true);
assertEqual(eqArrays(middle([1,4]),[2]),false);
assertEqual(eqArrays(middle([1,2,3]),[2]),true);
assertEqual(eqArrays(middle([1,2,3]),[3]),false);
assertEqual(eqArrays(middle(["Mic", "Tom", "Jer"]),["Tom"]),true);
assertEqual(eqArrays(middle(["Mic", "Tom", "Jer"]),["Mic"]),false);
assertEqual(eqArrays(middle([1,2,3,4,5,6]),[3,4]),true);
assertEqual(eqArrays(middle([1,2,3,4,5,6]),[4,3]),false);
assertEqual(eqArrays(middle(["Mic","Tom","Bri", "Bob", "Jer"]),["Bri"]),true);
assertEqual(eqArrays(middle(["Mic","Tom","Bri", "Bob", "Jer"]),["Tom"]),false);