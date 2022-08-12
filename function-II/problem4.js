// use the same function to print odd numbers between a given limit (from 2 to 20)

//reusing the function
function check_even(num){
    if(num%2==0){
      return true;
    } else {
      return false;
    }
  }
  
  for (let i=2;i<=20;i++){
    if(check_even(i)==false){
      console.log(i,"is Odd");
    }
  }