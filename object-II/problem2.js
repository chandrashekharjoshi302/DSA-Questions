// Given a string, find the number of times each character appears.

let str="aabbcc cdddd";

//step1: Take an empty object
let obj={};

//step2: Visit each character of the string
for (let i=0;i<=str.length-1;i++){
  let char=str[i];
  if(obj[char]==undefined){
    obj[char]=1;
  } else{
    obj[char]++;
  }
}

console.log(obj);
