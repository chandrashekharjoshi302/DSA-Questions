

// Given a string str, check whether it is possible to create "aman" from it.
// If exist then print Exist otherwise Not


let str1 = "aman";
let str2 = "naman";
let result = "pta nhi";

for(let i=0; i<str1.length; i++)
{
  let present = "Bhai nhi hai";
  
  for(let j=0; j<str2.length; j++)
    {
      if(str1[i]==str2[j]){
        present = "bhai hai";
      }
    }

  if(present=="Bhai nhi hai"){
    result = "NOT EXIST";
    break;
  }
  
}

if(result == "pta nhi")
{
  console.log("EXIST");
}
else{
  console.log("Not Exist");
}