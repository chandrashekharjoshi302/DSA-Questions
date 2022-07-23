let stored_username="Ajay";
let stored_password="ajay@090";

let input_username="Ajay";
let input_password="ajay@090";

if (stored_username==input_username){
  if(stored_password==input_password){
    console.log("Successful Login");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("Wrong Username");
}