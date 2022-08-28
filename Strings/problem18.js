
// Problem : print only those substring whose first and last characters are same

let str = "masai";

for(let father=0; father<str.length; father++){
  for(let son=father ; son<str.length; son++){
    let bag = "";
    for(let you=father ; you<=son; you++){
      bag = bag + str[you];
    }

    let last_index = bag.length-1;
    if(bag[0]==bag[last_index]){
       console.log(bag);
    }
   
  }
}