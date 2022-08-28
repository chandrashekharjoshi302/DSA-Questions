
function checkPrime(num){
    let factor=0;
    for(let i=1; i<=num; i++){
      if(num%i==0){
        factor++;
      }
    }
  
    if(factor==2){
      return true;
    }
    else{
      return false;
    }
  }
  
  
  
  let arr = [
              [1,6,7],
              [8,9,10],
              [11,12,13]
            ];
  
  
  let rows = arr.length;
  let cols = arr[0].length;
  
  let prime_sum=0;
  let composite_sum=0;
  
  for(let father=0; father<rows; father++)
  {
    for(let son=0; son<cols; son++)
    {
        if(arr[father][son]==1){
          continue;
        }
      
        let isPrime = checkPrime(arr[father][son]);
  
        if(isPrime==true){
          prime_sum += arr[father][son];
        }
        else{
          composite_sum += arr[father][son];
        }
    }
  }
  
  console.log(Math.abs(prime_sum-composite_sum));