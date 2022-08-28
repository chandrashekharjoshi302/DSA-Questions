

let str = "masai"

function checkPalindrome(gadha_prasad)
{
  let jhola_prasad="";
  for(let i=gadha_prasad.length-1; i>=0; i--)
  {
      jhola_prasad = jhola_prasad + gadha_prasad[i]; 
  }

  if(jhola_prasad == gadha_prasad){
    return true;
  }
  else{
    return false;
  }
}

