// Problem1: Given a Square matric print both the diagonals

//==> What is square matrix? ==> when rows=cols
//==> what is Diagonal of a matrix?

let arr=[
    [1,2,3,5],
    [4,5,6,7],
    [7,8,9,0],
    [3,6,8,9]
  ];
  let rows=arr.length;
  let cols=arr[0].length;
  
  let left="";
  let right="";
  for (let i=0;i<=rows-1;i++){
    for (let j=0;j<=cols-1;j++){
      if(i==j){
        left=left+arr[i][j]+" "
      } 
      if(i+j==rows-1){
        right=right+arr[i][j]+" "
      }
    }
  }
  console.log("Left Diagonal",left);
  console.log("Right Diagnal",right);