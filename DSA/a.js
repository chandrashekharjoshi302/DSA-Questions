function check(N){
    let sum = 0
      let originNUM = N
      while(N>0){
    
        let rem = N%10
        sum=sum+rem*rem*rem
        N=N/10
        
      }
      console.log(originNUM,sum)
      if(originNUM==sum){
        console.log("yes it is ")
      }else{
        console.log("it's is not")
      }
      
    }
    check(407)
    