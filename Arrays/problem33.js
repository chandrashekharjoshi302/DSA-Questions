
let arr1 = [3,1,4,5,7];
let arr2 = [6,1,9,3,2];
let arr3 = [3,1,4,5,7];
let arr4 = [6,1,9,3,2];


// 3*6*3*6 + 1*1*1*1 + 5*3*5*3 + 7*2*7*2


let sum = 0;
for(let i=0; i<arr1.length; i++)
{
  sum = sum + arr1[i]*arr2[i]*arr3[i]*arr4[i];
}

console.log(sum);
