let names=["AMIT", "NRUPUL", "AMAN", "VARUN"];

//count the names that contain atleast 1 "A"

let count=0;

//parent loop is to visit each and every name
for (let i=0;i<=names.length-1;i++){
  let string=names[i];
  //child loop is to visit each and every character of the name
  for(let j=0;j<=string.length-1;j++){
    if(string[j]=="A"){
      count++;
      break;
    }
  }
}

console.log(count);