
// Problem 2: Print the 3 length substrings


let str = "masai";

for(let father=0; father<str.length; father++){
  for(let son=father ; son<str.length; son++){
    let bag = "";
    for(let you=father ; you<=son; you++){
      bag = bag + str[you];
    }

    if(bag.length == 4){
       console.log(bag);
    }

  }
}