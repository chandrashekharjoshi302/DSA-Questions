// * * * * *
// *       *
// * * * * *
// *
// * * * * *
// *       *
// * * * * *


function myfun(input){
 
    for(let i=1;i<=input;i++){
     let bag  = " "
      for(let j=1;j<=input;j++){
        if(i%2==1){
      
          bag+="*"+" "
        }else if(j==1 || j==5){
          bag+="*"+" "
        }
        else{
          bag+=" "+" "
        }
        
        }
       console.log(bag)
      }
     
    
  }
  
  myfun(5)
  