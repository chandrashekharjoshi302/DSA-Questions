let details={
    name: "Chunnu",
    age:20,
    location: "Manali",
    hobbies: ["Coding", "Graphic Novels", "Movies"]
  };
  
  console.log("Name is", details["name"]);
  console.log("Age is", details["age"]);
  console.log("He lives at", details["location"]);
  let bag="";
  for (let i=0;i<=details["hobbies"].length-1;i++){
    if(i==details["hobbies"].length-1){
      bag=bag+details["hobbies"][i];
    } else {
      bag=bag+details["hobbies"][i]+", ";
    }
  }
  console.log("His hobbies are",bag);