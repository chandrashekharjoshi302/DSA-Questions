


// Check whether a string is amazing or not 

// For even length string, every character in odd position of the given character is different from the next character .

// Find whether a string is Amazing or not


let str = "good";
let flag = "amazing"

for(let i=0; i<str.length; i++)
{
  if(i%2==0){
    if(str[i] == str[i+1]){
      flag = "not amazing";
      break;
    }
  }
}

console.log(flag);