//problem1: Count the number of words in a sentence.

let sen="Aman Singh";

let count=0;
if(sen.length>0){
  for (let i=0;i<=sen.length-1;i++){
    if(sen[i]==" "){
      count++;
    }
  }
  console.log(count+1);
} else {
  console.log(0);
}

