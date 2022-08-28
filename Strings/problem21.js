

// print the max length substring among all substrings


let str = "masai";
let max_pad = -Infinity;
let max_string = "";


let arr_length = [];
let arr_string = [];

for(let father=0; father<str.length; father++){
  for(let son=father ; son<str.length; son++){
    let bag = "";
    for(let you=father ; you<=son; you++){
      bag = bag + str[you];
    }

    arr_length.push(bag.length);
    arr_string.push(bag);
    

  }
}

console.log(arr_length);
console.log(arr_string);


// Given an array , find the max in an array