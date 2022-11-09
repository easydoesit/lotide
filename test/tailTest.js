const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns  [["me", "and"] ["me", ["and", "me"]] for ["not me", ["me", "and"] ["me", ["and", "me"]]]', ()=> {
    assert.deepEqual(tail(["not me", ["me", "and"] ["me", ["and", "me"]]]), [["me", "and"] ["me", ["and", "me"]]]);
  });

});