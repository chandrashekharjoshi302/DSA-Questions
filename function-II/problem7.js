// use the above function to check if a string is palindrome or not?

function reverse(str){
    let bag="";
    for (let i=str.length-1;i>=0;i--){
      bag=bag+str[i]; // concatenation
    }
    return bag;
  }
  
  if(reverse("sumit")=="sumit"){
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
  