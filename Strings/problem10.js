// add A to index 6

let name="superman";

let result="";
for (let i=0;i<=name.length-1;i++){
  result=result+name[i];
  if(name[i]=="m"){
    break;
  }
}
result=result+"A";


for (let j=name.length-2;j<=name.length-1;j++){
  result=result+name[j];
}

console.log(result);


