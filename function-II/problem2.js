//1==> Return means take the output and go to the calling statemnet.

//2==> Why return?
// If there is a task or an operation that you want to perform on the outcome obtained by the function

// write a function to check even or odd, if it is even write "Yes" otherwise "No";

function check_even(num){
    if(num%2==0){
      return true;
    } else {
      return false;
    }
  }
  
  if(check_even(9)===true){
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
  
  //Dynamic function:- Is a funcytion which i can use anywhere and it will give me the required output.