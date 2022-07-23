// Calculate the sum of even numbers and odd numbers in between 1 and 50, including both the numbers.

let even_sum=0;
let odd_sum=0;

for (let i=1;i<=50;i++){
  if(i%2==0){
    even_sum=even_sum+i;
  } else {
    odd_sum=odd_sum+i;
  }
}

console.log("Even sum is",even_sum);
console.log("Odd sum is",odd_sum);