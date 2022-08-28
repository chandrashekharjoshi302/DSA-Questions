

arr = [
    [1,2,7],
    [3,4,6],
    [5,6,10]
  ];


let rows = arr.length;
let cols = arr[0].length;
let sum=0;

for(let father=0; father<cols; father++){
for(let son=0; son<rows;son++){

if(father==0 || father==cols-1){
sum= sum + arr[son][father];
}

}
}

console.log(sum);