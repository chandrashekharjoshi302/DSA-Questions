
function PrimeNum(a, b) {

    for (let num = a; num <= b; num++) {
      let i
      for (i = 2; i < num; i++) {
        
        if (num % i == 0) {
          break
        }
      }
  
      if (i == num) {
       console.log(i)
     }
  
    }
  }
  
  PrimeNum(2, 10)
  
  
  
  