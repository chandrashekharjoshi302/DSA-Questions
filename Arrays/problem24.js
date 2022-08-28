

// Given an array find the sum with alternate addition and subtraction

let arr = [5,1,6,2,8,3];

// sum = 5+1-6+2-8+3

let sum = arr[0];

for(let i=1; i<arr.length; i++)
{
  if(i%2==1){
    sum = sum + arr[i];
  }
  else{
    sum = sum - arr[i];
  }
}

console.log(sum);