/*

OUTPUT

1
*
1 2
* *
1 2 3
* * *
1 2 3 4 
* * * *

*/

for (let i=4;i>=1;i--){
    let result1="";
    let result2="";
    for(let j=1;j<=i;j++){
      result1=result1+j+" ";
      result2=result2+"*"+" ";
    }
    console.log(result1);
    console.log(result2);
  }
  