

// Given two strings, concatenate the first string with the reverse of other string

let first = "karan";
let second = "arjun";

// O/P : karunnujra


let rev="";

for(let i=second.length-1 ; i>=0; i--){
  rev = rev + second[i];
}

let result = first+rev;
console.log(result);