let arr=[1, 4, 6, 5, 3, 7, 2];

//print the maximu element

let notebook= Infinity;

for (let i=0;i<=arr.length-1;i++){
  if(arr[i]<notebook){
    notebook=arr[i];
  }
}

console.log(notebook);