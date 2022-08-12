// using the same function, count even numbers netween 1 and 100

function check_even(num){
    if(num%2==0){
      return true;
    } else {
      return false;
    }
  }
  
  let count=0;
  for (let i=1;i<=100;i++){
    if(check_even(i)==false){
      count++;
    }
  }
  console.log(count);