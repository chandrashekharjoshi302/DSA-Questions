// use the same function to print even numbers between a given limit (from 2 to 20)

function check_even(num){
    if(num%2==0){
      return true;
    } else {
      return false;
    }
  }
  
  for (let i=2;i<=20;i++){
    if(check_even(i)==true){
      console.log(i,"is Even");
    }
  }