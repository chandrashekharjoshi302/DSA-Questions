

// Problem 2 : Given a string, form a new string from the concatenation of odd position character.
// Assume : Position starts from 0

let str = "masai";
let result = "";

for(let i=0; i<str.length; i++){
  if(i%2==1){
    result = result + str[i];
  }
}

console.log(result);