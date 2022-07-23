// Calculate the sum of even numbers in between 1 and 50, including both the numbers

let sum=0;

for (let i=1;i<=50;i++){
  if(i%2==0){
    sum=sum+i;
  }
}
console.log(sum);