// Given an array and a element k. Check whether the element k exist in the array or not.
// If Present then print "Bhai Mil Gya"
// Else "Bhai nhi mila"


let arr = [5,23,54,24,89,52,23,23,23,23];
let k = 23;

let present = false;
for(let i=0; i<arr.length; i++)
{
  if(arr[i]==k){
    present = true;
    break;
  }
}

if(present==true){
  console.log("Bhai Mil Gya");
}
else{
  console.log("Bhai Nhi Mila");
}