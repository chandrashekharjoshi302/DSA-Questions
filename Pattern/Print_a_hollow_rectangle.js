for(let i=1;i<=5;i++){
    let bag = " "
     for(let j=1;j<=5;j++){
       if(j==1||j==5||i==1||i==5){
       bag+='*'+""     
       }else{
         bag+=" "
       }
    
     }
     console.log(bag)
     continue
   }