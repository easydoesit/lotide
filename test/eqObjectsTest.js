const eqObjects = require("../eqObjects");
const assert = require('chai').assert;


// mocha tests
describe("#eqObjects", () => {
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };

  it('returns true for { a: "1", b: "2" }, { b: "2", a: "1" } ', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  const abc = { a: "1", b: "2", c: "3" };
  /* TODO CHECK ARRAYS
  it('returns false for { a: "1", b: "2" }, { a: "1", b: "2", c: "3" }', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };

  it('returns true for {c: "1", d: ["2", 3],dc},  { d: ["2", 3], c: "1" } ', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it('returns false for {a: "1", b: "2", c:[1]}, {a: "1", b: "2", c:[2]}', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
*/
  it(`returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }`, () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it(`returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }`, () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it(`returns false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }`, () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  /* TODO CHECK ARRAYS.
  it(`returns true for { a: { z: [1,2,3] }, b: 2 }, { a: { z: [1,2,3] }, b: 2 }`, () => {
    assert.deepEqual(eqObjects({ a: { z: [1,2,3] }, b: 2 }, { a: { z: [1,2,3] }, b: 2 }), true);
  });

  it(`returns true for { a: { z: [1,2,3] }, b: 2 }, { a: { z: [1,2,3] }, b: 2 }`, () => {
    assert.deepEqual(eqObjects({ a: { z: [[{a: 1},{b: 2}],2,3] }, b: 2 }, { a: { z: [[{a: 1},{b: 2}],2,3] }, b: 2 }), true);
  });
*/

});