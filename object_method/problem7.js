//create an object method to print the details presnt inisde the object

let details={

    name:"Clark Kent",
    age:45,
    location:"Metropolis",
  
    print:function(){
      console.log(this.name);
      console.log(this.age);
      console.log(this.location);
    }
    
  }
  
  details["print"]();
  
  //while accessing the data present inside the same object i will use a magic word "this".