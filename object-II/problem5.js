// Find the element whose occ. is 1

let arr= [3,2,7,7,3,4,2];

let obj={};
for (let i=0;i<=arr.length-1;i++){
  let elem=arr[i];
  if(obj[elem]==undefined){
    obj[elem]=1;
  } else {
    obj[elem]++;
  }
}
for (let key in obj){
  if(obj[key]==1){
    console.log(key);
  }
}