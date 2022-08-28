
// Find all the sub-arrays whose sum is 15

function sum(arr){
    let s=0;
    for(let i=0; i<arr.length; i++){
      s=s+arr[i];
    }
    return s;
  }
  
  
  let arr = [15, 8, 7, 6, 9, 4, 11];
  
  for(let father=0; father<arr.length; father++){
    for(let son=father ; son<arr.length; son++){
  
      let ar = [];
      for(let you=father ; you<=son; you++){
        ar.push(arr[you]);
      }
  
      let result = sum(ar);
      if(result==15){
        console.log(ar);
      }
  
    }
  }