//create your own join function.

function myJoin(arr,separator){
    let bag="";
    if(separator==undefined){
      for (let i=0;i<=arr.length-1;i++){
        if(i!=arr.length-1){
          bag=bag+arr[i]+","; //concatenation
        } else {
          bag=bag+arr[i]; //concatenation
        }
      }
    } else {
      for (let i=0;i<=arr.length-1;i++){
        if(i!=arr.length-1){
          bag=bag+arr[i]+separator; //concatenation
        } else {
          bag=bag+arr[i]; //concatenation
        }
      }
    }
    
    return bag;
  }
  
  let joined_str=myJoin([1,2,3,4]);
  
  console.log(joined_str);

  console.log("chandrashekhar joshi")
  