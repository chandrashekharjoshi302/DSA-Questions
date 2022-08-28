
// Given an array, find the sum of even elements

let arr = [3,1,4,6,2,8];
let sum_even = 0;

for(let i=0; i<arr.length; i++){
  
  if(arr[i]%2 == 0){
    sum_even = sum_even + arr[i];
  }
  
}

console.log(sum_even);