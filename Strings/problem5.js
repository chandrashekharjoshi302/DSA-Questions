//update in string/ replace a character in string

let name="Ronald";

//change to Donald

//step1: Convert the string to array

let arr=[];

for (let i=0;i<=name.length-1;i++){
  arr.push(name[i]);
}

//step2: Update the value
arr[0]="D";

//step3: Convert it to string
let new_str="";
for (let j=0;j<=arr.length-1;j++){
  new_str=new_str+arr[j]; //concatenation
}

console.log(new_str);