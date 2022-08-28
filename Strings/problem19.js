// print the max length substring among all substrings


let str = "masai";
let max_pad = -Infinity;
let max_string = "";

for(let father=0; father<str.length; father++){
  for(let son=father ; son<str.length; son++){
    let bag = "";
    for(let you=father ; you<=son; you++){
      bag = bag + str[you];
    }

    // security check
    if(max_pad<bag.length){
      max_pad = bag.length;
      max_string = bag;
    }
    
  }
}


console.log(max_string);
