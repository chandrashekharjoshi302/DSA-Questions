
// Given two arrays, find the sum of product of elements.

let arr1 = [3,1,4,5,7];
let arr2 = [6,1,9,3,2];

// 3*6 + 1*1 + 4*9 + 5*3 + 7*2

let sum = 0;
for(let i=0; i<arr1.length; i++)
{
  sum = sum + arr1[i]*arr2[i];
}

console.log(sum);
