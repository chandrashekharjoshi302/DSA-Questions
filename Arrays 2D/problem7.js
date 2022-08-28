
let arr = [
    [1,2, 3,  4],
    [5,6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
];


let k = 11;
let x,y;

let rows = arr.length;
let cols = arr[0].length;


for(let i=0; i<rows; i++){
for(let j=0; j<cols; j++){

if(arr[i][j]==k){
x = i;
y = j;
break;
}

}
}


let diff = x-y;
let sum = x+y;
let left_diagonal = "";
let right_diagonal = "";


for(let i=0; i<rows; i++){
for(let j=0; j<cols; j++){

if((i-j)==diff){
left_diagonal = left_diagonal + arr[i][j]+" ";
}

if((i+j)==sum){
right_diagonal = right_diagonal + arr[i][j]+" ";
}

}
}

console.log(left_diagonal);
console.log(right_diagonal);