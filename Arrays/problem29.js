
// Given an array, find the sum of even elements


function check_even(x){
    if(x%2 == 0){
      return true;
    }
    else{
      return false;
    }
  }
  
  
  let arr = [3,1,4,6,2,8];
  let sum_even = 0;
  
  for(let i=0; i<arr.length; i++){
  
    let res = check_even(arr[i]);
    
    if(res){
      sum_even = sum_even + arr[i];
    }
    
  }
  
  console.log(sum_even);