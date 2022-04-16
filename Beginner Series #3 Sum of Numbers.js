/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Sample Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {         
    assert.strictEqual(getSum(0,-1),-1);
    assert.strictEqual(getSum(0,1),1);
  })
});
*/

function getSum( a,b )
{
  let larger = 0;
  let smaller = 0;
  let sum = 0;
  if (a > b){
    larger = a;
    smaller = b;
  } else if(a < b) {
    larger = b;
    smaller = a;
  } else if(a === b){
    return a;
  }
  for(let i=smaller;i<=larger;i++){
    sum += i;
  } 
  return sum;
}
