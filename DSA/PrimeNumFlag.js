function check(N){
    let flag = true
   for(let i=2;i<N;i++){
     if(N%i==0){
       flag = false
     }
   }
    if(flag){
      console.log("it's Prime")
    }else{
      console.log("it's not Prime")
    }
  
  }
  check(8)