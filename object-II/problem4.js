//find the sum of elements whose occ. is 2

let arr=[7,2,7,3,4,4,2];

let obj={};
for (let i=0;i<=arr.length-1;i++){
  let elem=arr[i];
  if(obj[elem]==undefined){
    obj[elem]=1;
  } else {
    obj[elem]++;
  }
}
let sum=0;
for (let key in obj){
  if(obj[key]==2){
    sum=sum+Number(key);
  }
}
console.log(sum);