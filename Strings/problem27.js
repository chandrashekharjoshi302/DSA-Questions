

// Given a String, Check weather if it contains either 'x', 'y' or 'z'.
// If yes then print "Found" else "Not Found"

let str = "kishozrilal";
let present = "bhai nhi hai";

// o/p : Not Found


for(let i=0; i<str.length; i++)
{
  if(str[i]=='x'||str[i]=='y'||str[i]=='z'){
    present = "bhai hai";
    break;
  }
}

if(present=="bhai hai"){
  console.log("Found");
}
else{
  console.log("Not Found");
}