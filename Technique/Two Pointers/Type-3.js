

//type -3

arr1 = [1, 3, 6, 9]; // n1 = 4
let n1 = arr1.length

arr2 = [1, 2, 5, 7, 8, 11]; // n2 = 6

let n2 = arr2.length
temp = []; // empty array to store values
let arr3 = [];

i=0, // is the first pointer
j=0, // is the second pointer
k=0; // just to keep a record of my temp array.


while(i < n1 && j < n2) {
if(arr1[i] < arr2[j]) {
arr3[k] = arr1[i];
i++;
k++;
} else {
arr3[k] = arr2[j];
j++;
k++;
}
}

while(i < n1) {
arr3[k] = arr1[i];
i++;
k++;
}

while(j < n2) {
arr3[k] = arr2[j];
j++;
k++;
}

console.log(arr3)

