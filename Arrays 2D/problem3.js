


let arr = [ [1,2,3],
[4,5,6],
[7,8,9]
];

let rows = arr.length;
let cols = arr[0].length;

let father = 0;

let bag = "";
for(let son=0; son<cols; son++)
{
bag = bag + arr[son][father];
}

console.log(bag);
father = 2;

bag = "";
for(let son=0; son<cols; son++)
{
bag = bag + arr[son][father];
}


console.log(bag);