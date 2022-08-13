let name="Supermanrrrrrrrrr";

//delete r from string

let result="";

for (let i=0;i<=name.length-1;i++){
  if(name[i]=="r"){
    continue;
  }
  result=result+name[i]; //concatenation
}

console.log(result);