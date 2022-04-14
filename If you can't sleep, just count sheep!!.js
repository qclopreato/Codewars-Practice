/*Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

var countSheep = function (num){
  let value = "";
  if (num === 0){
    return value;
  } else if(num !== 0){
    for(let i=1;i<num+1;i++){
      value += (i + " sheep...");
    }
  return value;
  }
}
