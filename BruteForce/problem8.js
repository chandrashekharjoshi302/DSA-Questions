

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




let str = "masai";
let max_pad = -Infinity;

for(let babuji=0; babuji<str.length; babuji++)
{
  for(let betaji=babuji; betaji<str.length; betaji++)
    {
      let jhola="";

      for(let you=babuji; you<=betaji; you++)
        {
          jhola += str[you];
        }
    }
      // Check Palindrome
      let palindrome = checkPalindrome(jhola)
      if(palindrome == true)
      {
        // Find Max Length
        if(max_pad<jhola.length)
        {
          max_pad = jhola.length;
        }
      }
    }