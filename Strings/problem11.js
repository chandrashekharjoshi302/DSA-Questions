let arr=["Amit", "Nrupul", "Aman", "Varun", "Pulkit"];

// count the names starting from "A"

let count=0;

for (let i=0;i<=arr.length-1;i++){
  let string=arr[i];
  if(string[0]=="A"){
    count++;
  }
}
console.log(count);