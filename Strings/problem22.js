
// sub arrays

let arr=[4,5,1,8,2];

for(let father=0; father<arr.length; father++){
  for(let son=father ; son<arr.length; son++){

    let bag = [];
    for(let you=father ; you<=son; you++){
      bag.push(arr[you]);
    }
    console.log(bag);
  }
}