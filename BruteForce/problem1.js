// Problem 1 : Given an array find whether a number 57 present inside an array or not.

//   If number is present then print "Found" otherwise "Not Found"

let arr = [34, 81, 21, 91, 57, 62];
let flag = false;

for(let i=0; i<arr.length; i++){
  if(arr[i]==57){
    flag = true;
    break;
  }
}

if(flag==true){
  console.log("Found");
}
else{
  console.log("Not Found");
}