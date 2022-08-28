
// Traversal : Row wise Left to right


let item = [
    [14, 16, 19, 20],
    [13, 12, 18, 21],
    [21, 41, 12, 22]
  ];


let rows = item.length;
let cols = item[0].length;

let bag = "";
for(let father=0; father<rows; father++)
{
for(let son = 0; son<cols; son++)
{
bag = bag + item[father][son]+" ";
}
}

console.log(bag);