// What is the frequency (no. of occ.) of each element.
let arr=[7,2,7,7,3,4,2];

let obj={};
for (let i=0;i<=arr.length-1;i++){
  let elem=arr[i];
  if(obj[elem]==undefined){
    obj[elem]=1;
  } else {
    obj[elem]++;
  }
}

console.log(obj);
