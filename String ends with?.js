/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Sample Tests:
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});*/

function solution(str, ending){
  const ripped = str.split("");
  const myArray = [];
  for (let i=(ripped.length);i>(ripped.length-ending.length);i--){
    myArray.unshift(ripped[i-1]);
  } 
  return myArray.join("") === ending ? true : false;
}
