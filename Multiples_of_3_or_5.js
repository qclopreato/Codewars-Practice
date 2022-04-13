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