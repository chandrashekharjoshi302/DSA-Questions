//problem2: Given a tring in lowercase convert it into upper case

let str="pulkit";
//==> AMAN

let new_str="";

let lower="abcdefghijklmnopqrstuvwxyz";

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// parent for loop is to visit each character of str
for (let i=0;i<=str.length-1;i++){
  let char=str[i];
  //inner loop is to visit each charater of lower
  for (let j=0;j<=lower.length-1;j++){
    if(char==lower[j]){
      new_str=new_str+upper[j];  //concatenation
      break;
    }
  }
}
console.log(new_str);