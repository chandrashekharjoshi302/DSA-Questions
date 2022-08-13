// Probelm2: Given a matrix print it in form of snake
//left to right ==>i=even
//right to left ==>i=odd
let arr=[
    [1,2,3,5],
    [4,5,6,7],
    [7,8,9,0],
    [3,6,8,9]
  ];
  
  let rows=arr.length;
  let cols=arr[0].length;
  
  for (let i=0;i<=rows-1;i++){
    if(i%2==0){
      for (let j=0;j<=cols-1;j++){
        console.log(arr[i][j]);
      }
    } else {
      for (let j=cols-1;j>=0;j--){
        console.log(arr[i][j]);
      }
    }
  }