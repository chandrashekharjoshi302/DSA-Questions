let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  
  //step1: Calculating no. of rows and no. of cols
  let rows=arr.length; // 3
  
  let cols=arr[0].length;
  
  //step2: Nested loops to iterate over each element
  let sum=0;
  for (let row=0;row<=rows-1;row++){ //outer loop for rows
    for (let column=0;column<=cols-1;column++){
      sum=sum+arr[row][column];
    }
  }
  console.log(sum);