const eqArrays = require("../eqArrays");
const assert = require('chai').assert;

// mocha tests
describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns true for ['{a: 1}', '2', '3'], ['{a: 1}', '2', '3']", () => {
    assert.deepEqual(eqArrays([{a: 1}, "2", "3"], [{a: 1}, "2", "3"]), true);
  });

  const Tim = "Tim";
  const George = "George";
  const Bob = "Bob";
  const Nik = "Nik";

  it("returns true for ['Tim', 'George', 'Bob'], [Tim, George, Bob]", () => {
    assert.deepEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Bob]), true);
  });

  it("returns false for ['Tim', 'George', 'Bob'], [Tim, George, Nik]", () => {
    assert.deepEqual(eqArrays(["Tim", "George", "Bob"], [Tim, George, Nik]), false);
  });

  it("returns true for [[1], '2', '3'], [[1], '2', '3']", () => {
    assert.deepEqual(eqArrays([[1], "2", "3"], [[1], "2", "3"]), true);
  });

  it("returns true for [[1], [2,2], '3'], [[1], [2,2], '3']", () => {
    assert.deepEqual(eqArrays([[1], [2,2], "3"], [[1], [2,2], "3"]), true);
  });

  it("returns true for [[1], [2,[2]], '3'], [[1], [2,[2]], '3']", () => {
    assert.deepEqual(eqArrays([[1], [2,[2]], "3"], [[1], [2,[2]], "3"]), true);
  });



});