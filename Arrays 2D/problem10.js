

let str = "madam";

let reverse = "";

for(let i=str.length-1; i>=0; i--)
{
  reverse += str[i];
}

if(reverse==str){
  console.log("Bapu! palindrome hai");
}
else{
  console.log("Bapu! palindrome nhi hai");
}