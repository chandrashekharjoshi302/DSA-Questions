//problem2: Given a lower case charater you have to print the uppercase

let char="c";

//let lower=["a","b","c","d"........"z"];
let lower=["a","b","c","d"];

//let upper=["A","B","C","D"......."Z"];
let upper=["A","B","C","D"];

for (let i=0;i<=lower.length-1;i++){
  if(char==lower[i]){
    char=upper[i];
    break;
  }
}

console.log(char);
