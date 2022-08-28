

let arr = [
    [1,2, 3, 4],
    [5,6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
];


let rows = arr.length;
let cols = arr[0].length;


// First Row
let father=0;
let son=0;

for(let son=0; son<cols-1; son++){
console.log(arr[father][son]);
}


// Diagonal
father = 0;
son = cols-1;
while(father<rows && son>=0){
console.log(arr[father][son]);
father++;
son--
}


// Last row
father = rows-1;
for(let son=1; son<cols; son++){
console.log(arr[father][son]);
}