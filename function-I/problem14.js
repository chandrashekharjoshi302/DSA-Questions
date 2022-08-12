//problem1: Write a function to check if a number is prome or not?

function check_prime(num){
    let factor=0;
    for (let i=1;i<=num;i++){
      if(num%i==0){
        factor++;
      }
    }
    if(factor==2){
      console.log(num,"is prime");
    } else {
      console.log(num, "is not prime");
    }
  }
  
  check_prime(6);