//problem2: USe the above function to print the prime numbers from 2 to a given limit

//function only to check prime numbers
function check_prime(num){
    let factor=0;
    for (let i=1;i<=num;i++){
      if(num%i==0){
        factor++;
      }
    }
    if(factor==2){
      return true;
    } else {
      return false;
    }
  }
  
  // I am using the check_prime function to check what values of j are prime
  for (let j=2;j<=20;j++){
    if(check_prime(j)==false){
      console.log(j,"is not a Prime");
    }
  }