//Problem 2: Print the prime numbers from 1 to given limit


for (let i=1;i<=50;i++){
    let factors=0;
    for (let j=1;j<=i;j++){
      if(i%j==0){
        factors++;
      }
    }
    
    if(factors==2){
      console.log(i,"is a prime number");
    } else {
      console.log(i,"is not a prime number");
    }
  }