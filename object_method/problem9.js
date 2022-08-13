let details={
    name: "pulkit",
    age: 54,
  
    print: function(){
      console.log(this.name,this.age);
    }
  }
  
  details["print"]();
  
  details["name"]="Ajay"; //updated the name
  
  details["print"]();
  
  details["age"]=27; //updating
  
  details["print"]();
  
  details["location"]="Delhi"; //added
  
  details["print"]();
  
  console.log(details);