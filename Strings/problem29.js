


// Problem 7 : Given an even length string, break it into parts and concatenate second part with first part.

// I/P : javascript (javas cript)

// O/p : criptjavas


let str = "javascript";
let middle = str.length/2;


let bag1="", bag2="";

for(let i=0; i<middle; i++){
  bag1 = bag1 + str[i];
}

for(let i=middle; i<str.length; i++){
  bag2 = bag2 + str[i];
}

console.log(bag2+bag1);