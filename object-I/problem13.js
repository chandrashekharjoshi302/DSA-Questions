//problem1: Given an array find the unique item in the array.

let arr=["Aman", "Ajay", "Aman", "Varun", "Pulkit", "Pulkit"];

// let list={
//   Aman: 1,
//   Ajay: 1,
//   Varun: 1,
//   Pulkit: 1
// }

let obj={};

for (let i=0;i<=arr.length-1;i++){
  let person=arr[i];
  obj[person]=1; // if present update it, if absent add it
}
console.log(obj);