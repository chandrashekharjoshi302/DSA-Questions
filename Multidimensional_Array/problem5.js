let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  
  let rows=arr.length; //3
  let cols=arr[0].length; //3
  
  for (let i=0;i<=rows-1;i++){
    let bag="";
    for (let j=0;j<=cols-1;j++){
      bag=bag+arr[j][i]+" ";
    }
     console.log(bag);
  }