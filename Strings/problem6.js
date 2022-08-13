//I need a new string because Ronald is not equal to Donald that is pretty obvious

//Whatever yoi have to change in a string you will use concatenation.

let name="Mouse"; //==>House

let new_str=""

for (let i=0;i<=name.length-1;i++){
  if(i==0){
    new_str=new_str+"H";
  } else {
    new_str=new_str+name[i];
  }
}

console.log(new_str);
