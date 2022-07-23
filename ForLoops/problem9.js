// calculate the average of odd numbers between 1 and 100 inclusig both

//Avg=sum/count

let sum=0;
let count=0;

for (let i=1;i<=100;i++){
  if(i%2!=0){
    sum=sum+i;
    count++;
  }
}
console.log("Average is", sum/count);