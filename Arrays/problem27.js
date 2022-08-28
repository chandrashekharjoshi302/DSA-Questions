
// Find the count of those elements which are greater than any of its neighbour elements.
//   Note : Do not include first and last element


let arr = [5,1,6,7,8,3];
// count : 2

let count=0;

for(let i=1; i<arr.length-1; i++)
{
  if(arr[i]>arr[i-1] || arr[i]>arr[i+1]){
    console.log("Elements",arr[i]);
    count++;
  }
}

console.log(count);