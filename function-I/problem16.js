//write a function to check if a character is small case or not

function check_lowercase(char){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let flag=false;
    
    for (let i=0;i<=lower.length-1;i++){
      if(char==lower[i]){
        flag=true;
        break;
      }
    }
    if(flag==true){
      console.log("lower case");
    } else {
      console.log("Upper case");
    }
  }
  
  check_lowercase("d");