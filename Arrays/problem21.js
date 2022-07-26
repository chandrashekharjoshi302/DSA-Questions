//Bonus Ques

let arr=["Bahubali", "Pushpa", "KGF", "Major"];

//i want to skip "Pushpa" and "KGF".

for (let i=0;i<=arr.length-1;i++){
  if(arr[i]=="Pushpa"||arr[i]=="KGF"){
    continue;
  }
  console.log(arr[i]);
}
