// To reach to all elements of 3D matrix

// var matrix =[[1,2,3],[4,5,6],[7,8,9]];
// var row = matrix.length;
// var cols = 1;
// for(var i=row,j=cols; i>=0||j<matrix.lengt;i--,j++){
//     console.log(matrix[i][j])
// }

// reverse patten of 3D matrix /
//  var matrix =[[1,2,3],[4,5,6],[7,8,9]];
// var row =0
// var cols = matrix.length-1;
// console.log(cols)
// for(var i=row,j=cols;i<=matrix.length-1,j>=0;i++,j--){
//     console.log(matrix[i][j])

// }

// some unique steps for printing 3D martix 
// for(var i=n-1;i>=0;i--){
//     console.log(matrix[i][0])
// }
// for(var i=1,j=1;i<n&& j<n;i++,j++){
//     console.log(matrix[i][j])
//     console.log(matrix[i][n-1])
// }

// patten printing in 3D matrix 
var matrix =[[1,2,3],[4,5,6],[7,8,9]];

var left = 0;
var right = matrix.length-1;
var top =0;
var bottom = matrix.length-1;
for(var i =bottom;i>=top;i--){
    console.log(matrix[i][left])

}
left++
for(var i=left;i<=right;i++){
    console.log(matrix[top][i])
}
top++
for(var i=top;i<=bottom;i++){
    console.log(matrix[i][right])
}
right--
for(var i=right;i>=left;i--){
    console.log(matrix[bottom][i])
}
bottom--









