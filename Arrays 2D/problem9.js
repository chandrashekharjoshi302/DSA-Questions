

function checkPalindrome(str){

    let reverse = "";
  
    for(let i=str.length-1; i>=0; i--)
    {
      reverse += str[i];
    }
    
    if(reverse==str){
      return true;
    }
    else{
      return false;
    }
    
  }
  
  
  let str = "masai";
  let arr = [];
  
  // Step 1 : Generate all Substring
  for(let father=0; father<str.length;father++){
    for(let son=father; son<str.length; son++){
      let bag="";
  
      for(let you = father; you<=son; you++){
        bag = bag + str[you];
      }
  
      let result = checkPalindrome(bag);
      if(result==true){
        arr.push(bag);
      }
  
    }
  }
  
  
  let max_pad = -Infinity;
  let max_string = "";
  
  for(let i=0; i<arr.length; i++)
  {
    let str = arr[i];
  
    if(max_pad<str.length){
      max_pad= str.length;
      max_string = str;
    }
   
  }
  
  
  console.log(max_string);
  
  
  