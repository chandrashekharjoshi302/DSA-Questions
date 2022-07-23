/*

OUTPUT

********** i=1
*        * 2
*        * 3
*        * 4
*        * 5
*        * 6
*        * 7
*        * 8
*        * 9
********** i=10

*/
for (let i=1;i<=10;i++){
    let bag="";
    for (let j=1;j<=10;j++){
      if(i==1||i==10){
        bag=bag+"*";
      } else {
        if(j==1||j==10){
          bag=bag+"*";
        } else {
          bag=bag+" ";
        }
      }
    }
    console.log(bag);
  }