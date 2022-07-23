//problem3:find the average of even numbers only

let arr=[1,2,3,4,5,6];

let sum=0;
let count=0;

for (let i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count);