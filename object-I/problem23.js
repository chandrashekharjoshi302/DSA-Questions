
// Problem 3 : Count the occurence of each character

// madras

let str = "madras";


let diary = {};

for(let i=0; i<str.length; i++)
{
  let char = str[i];

  if(diary[char]==undefined){
    diary[char] = 1;
  }
  else{
    diary[char] = diary[char] + 1;
  }
}

for(let x in diary ){
  console.log(x,"-",diary[x]);
}



https://drive.google.com/file/d/1lMCy-fExJRdsOPLLT02gwYRIZJ3kLuOl/view?usp=sharing