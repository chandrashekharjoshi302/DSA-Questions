// 1 - 1
// 2 - 1
// 3 - 1
for (let i=1;i<=12;i++){
    let days=31;
    if(i==2){
      days=28;
    } else if(i==4||i==6||i==9||i==11){
      days=30;
    }
    for (let j=1;j<=days;j++){
      console.log(j,"-",i);
    }
  }
  