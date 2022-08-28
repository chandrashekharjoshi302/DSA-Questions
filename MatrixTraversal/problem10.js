
// Print Sum of even values


let item2 = [
    [14, 16, 19, 20],
    [13, 12, 18, 21],
    [21, 41, 12, 22]
  ];

let rows = item2.length;
let cols = item2[0].length;
let sum=0;
for(let father=0; father<rows; father++)
{
for(let son=0; son<cols; son++)
{

let value = item2[father][son];
if(value%2==0){
  sum = sum + value;
}

}
}

console.log(sum);