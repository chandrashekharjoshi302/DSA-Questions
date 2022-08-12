// Write a function to multiply each element of two arrays (length is same), then print the numbers greater than 100 in the product array
//output==>[20,80,180,320]

function product(arr1,arr2){
    let arr=[];
    for (let i=0;i<=arr1.length-1;i++){
      arr.push(arr1[i]*arr2[i]);
    }
    
    return arr;
  }
  
  let array=product([2,4,6,8],[10,20,30,40]);
  
  for (let i=0;i<=array.length-1;i++){
    if(array[i]>100){
      console.log(array[i]);
    }
  }