// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit 

let limit=20;

let i=0;
let sum=0;

while(i<=limit){
  if(i%3==0){
    sum=sum+i;
  }
  i++;
}
console.log(sum);