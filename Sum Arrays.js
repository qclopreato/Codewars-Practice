/*Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.

Sample Test:
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});
*/

function sum (numbers) {
  const inputs = numbers;
  let total = 0;
 if (inputs[0] === ""){
    return total;
  } else {
    for (let i=0;i<inputs.length;i++){
      total += inputs[i];
    }
    return total;
  }
};
