// Given an array of containing only 0's and 1's, find the count of 0's and 1's

let arr = [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1,2,2,2];

// count of 0 : 5  
// count of 1 : 6


let count0 = 0;
let count1 = 0;
let count2 = 0;


for(let i=0; i<arr.length; i++)
{
  if(arr[i]==0){
    count0++;
  }
  else if(arr[i]==1){
    count1++;
  }
  else if(arr[i]==2){
    count2++;
  }
}

console.log("Count of 0",count0);
console.log("Count of 1",count1);
console.log("Count of 2",count2);