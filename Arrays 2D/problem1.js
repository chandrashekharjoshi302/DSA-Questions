
let arr = [ [0,0,1],
[1,1,0],
[0,0,1],
];

let win = "Tie";


for(let fixed = 0; fixed<=2; fixed++)
{
// Horizontally
if(arr[fixed][0]==arr[fixed][1] && arr[fixed][1]==arr[fixed][2])
{
win = arr[fixed][0];
}

//Vertically
if(arr[0][fixed]==arr[1][fixed] && arr[1][fixed]==arr[2][fixed])
{
win = arr[0][fixed];
}

}


if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2])
{
win = arr[0][0];
}


if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0])
{
win = arr[0][2];
}

console.log("Winner is",win);