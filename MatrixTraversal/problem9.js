

// Printing Format 
// 14 16 19 20
// 13 12 18 21 
// 21 41 12 22


let item2 = [
    [14, 16, 19, 20],
    [13, 12, 18, 21],
    [21, 41, 12, 22]
  ];

let rows = item2.length;
let cols = item2[0].length;

for(let father=0; father<rows; father++)
{
let bag = "";
for(let son=0; son<cols; son++)
{
bag = bag + item2[father][son]+" ";
}
console.log(bag); 

}