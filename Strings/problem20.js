
// count all the substrings whose length is 3



let str = "masai";
let count=0;

for(let father=0; father<str.length; father++){
  for(let son=father ; son<str.length; son++){
    let bag = "";
    for(let you=father ; you<=son; you++){
      bag = bag + str[you];
    }
    
    if(bag.length == 3){
       count++;
    }
    
  }
}

console.log(count);