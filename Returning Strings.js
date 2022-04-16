/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

Sample Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
  })
})*/

function greet(name){
  var myArray = [name];
  const map1 = myArray.map( x => "Hello, " + name + " how are you doing today?");
  return map1[0];
}
