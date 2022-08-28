

// Problem : Given string is "raj"


str2 = "r";

let obj = {};

for(let i=0; i<str2.length; i++){
  
  let char = str2[i];
  
  obj[char] = true;
}

if(obj["r"]==true && obj["a"]==true && obj["j"]==true)
{
  console.log("Exist");
}
else{
  console.log("Not Exist");
}