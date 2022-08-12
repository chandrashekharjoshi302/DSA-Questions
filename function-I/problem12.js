function even(a){
    if(a%2==0){
      return true;
    } else {
      return false;
    }
  }
  
  let result=even(2);
  
  if(result==true){
    console.log("even");
  } else {
    console.log("odd");
  }