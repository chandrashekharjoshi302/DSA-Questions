
// Given an array find the sum of even position elements
// Assume first element is at position 0

let arr = [3,1,4,6,2,8];


let sum = 0;

for(let i=0; i<arr.length; i++)
{
  if(i%2 == 0){
    sum = sum + arr[i];
  }
}

console.log(sum);