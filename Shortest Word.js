/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Sample Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
})*/

function findShort(s){
  const thing = s.split(' ');
  const myArray = [];
  for (let i=0;i<thing.length;i++){
    myArray.push(thing[i].length);
  }
  const minValue = Math.min(...myArray);
  return minValue;
}
