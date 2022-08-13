//nested objects
let details={
    name: "Chunnu",
    age:20,
    address:{
      city: "New Delhi",
      pin: "12345",
      house: "345"
    }
  };
  
  console.log(details["address"]["pin"]);
  
  details["address"]["state"]="Delhi";
  
  delete details["address"]["house"];
  
  console.log(details);