//write a function to reverse a string

function reverse(str){
    let bag="";
    for (let i=str.length-1;i>=0;i--){
      bag=bag+str[i]; // concatenation
    }
    console.log(bag);
  }
  
  reverse("aman");