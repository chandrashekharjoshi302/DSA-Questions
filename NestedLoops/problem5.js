/*

OUTPUT

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/
for (let i=5;i>=1;i--){
    let bag="";
    for (let j=1;j<=i;j++){
      bag=bag+j+" ";
    }
    console.log(bag);
  }