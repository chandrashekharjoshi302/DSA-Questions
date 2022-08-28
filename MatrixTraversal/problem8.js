


// Loop in Multi-dimensional Array


let item2 = [
    [14, 16, 19, 20],
    [13, 12, 18, 21],
    [21, 41, 12, 22]
  ];

let rows = item2.length;
let cols = item2[0].length;

for(let father=0; father<rows; father++)
{
for(let son=0; son<cols; son++)
{
console.log(item2[father][son]);
}
}