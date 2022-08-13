//create an objcet with following details
//name: Ram
//age:34
//hobbies:["coding","biking"]
//print: function(){print all the details}

let obj={
    name:"Ram",
    age:34,
    hobbies:["Coding", "Biking"],
    print: function(){
      console.log("Hello", this.name);
      console.log("Age is", this.age);
      let bag="";
      for (let i=0;i<=this.hobbies.length-1;i++){
        if(i!=this.hobbies.length-1){
          bag=bag+this.hobbies[i]+", ";
        } else {
          bag=bag+this.hobbies[i]
        }
        
      }
      console.log("Hobbies are", bag);
    }
  }
  
  obj["print"]();
  /*
  
  Hello Ram
  Age is 34
  Hobbies are Coding, Running
  
  */