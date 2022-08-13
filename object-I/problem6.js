//How to update anything in an object
let details={
    name: "Bruce Wayne",
    age:42,
    location: "Gotham",
    job: "superhero"
  };
  
  details["name"]="Gangadhar";
  
  details["location"]="Mumbai";
  
  details["enemy"]="Kilvish"; // added to the object
  
  console.log(details);
  
  //1==> When the key is present inside the object and i am assigning a new value to it, that thing will get updated.
  
  //2==> When the key is not present inside the objcet and i am assigning a value to it, that particular will get added.