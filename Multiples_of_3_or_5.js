/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)*/

myArray = [];
let total = 0;

function solution(number){
  if (number < 0){
    return 0;
  } else if (number >= 0){
    let threes = Math.floor(number / 3);
    let fives = Math.floor(number / 5);
    for (let i=1;i<threes+1;i++){
      let threeCount = 3*i;
      if (threeCount === number){
      } else {
        myArray.push(threeCount);
      }
    }
    for (let j=1;j<fives+1;j++){
      let fiveCount = 5*j;
      if (fiveCount === number){
      } else {
        myArray.push(fiveCount);
      }
    }
    console.log(myArray);
    for (let k=0;k<myArray.length;k++){
      total += myArray[k];
    }
    return total;
  }
}
