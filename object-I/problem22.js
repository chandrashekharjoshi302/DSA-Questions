

// Problem 2 : Given a key and object, check if key exist or not.
// If yes then print "Exist" otherwise "Not Exist"


let obj = {
    name : "Rahul",
    age : 25,
    gender : "male",
    undefined : "Hi I am devil"
  };
  
  let maharana_pratap_singh = "undefined";
  
  if(obj[maharana_pratap_singh] == undefined)
  {
    console.log("Key Not Exist");
  }
  else
  {
    console.log("Key Exist");
  }