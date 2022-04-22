/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

Sample Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    //assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    //assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    //assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    //assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })*/

function areYouPlayingBanjo(name) {
  return name.match(/^[r]/gi) ? name + " plays banjo" : name + " does not play banjo"; 
}
