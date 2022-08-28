


let item = [
    [14, 16, 19, 20],
    [13, 12, 18, 21],
    [21, 41, 12, 22]
  ];


let rows = item.length;
let cols = item[0].length;

let bag = "";
for(let father=0; father<cols; father++)
{
for(let son=0; son<rows; son++){
bag = bag + item[son][father]+" ";
}
}

console.log(bag);