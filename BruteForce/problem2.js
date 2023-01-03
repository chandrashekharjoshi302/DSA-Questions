// Problem 2 : Given an array and a value sum x, find how many pairs exist in an array which can give the sum x.


let arr = [1,2,3,4,5,6,7,8,9];
let sum = 3;

function ToPointer(arr,sum){
    let i = 0;
let j = arr.length-1;

while(i<j){

    if(arr[i]+arr[j]==sum){
        return "it is here"
    }else if(arr[i]+arr[j]<sum){
        i++

    }
    else{
j--
    }
    return "sorry there is nothing "
}

}

console.log(ToPointer(arr,sum))