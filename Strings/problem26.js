

// Problem 2 : Given a string, form a new string from the concatenation of even position character.
// Assume : Th index 0 will be considered as Position 1


let str = "masai";

// o/p : aa

let result = "";
for(let i=0; i<str.length; i++)
{
  if(i%2==1){
    result = result + str[i];
  }
}

console.log(result);