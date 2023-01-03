

// Given a sorted array A (sorted in ascending order), having N integers,
// find if there exists any pair elements (A[i],A[j]) such that 
// their sum is equal to X.

// Imput : A = [2,3,4,5,6,7,8,9] , k = 10
// Output : true 
// NOTE : We slightly changed the question and the output in the video.
// we are returning pair indexes as an array 



// type - 1

const arr = [2,3,4,5,6,7,8,9];

const k = 11;

function findPairs(arr , k ){

    let start = 0;
    let end = arr.length-1;

    let occurances = [];

    while(start<end){
        if(arr[start]+arr[end] ==k ){
            occurances.push([start,end])
            start++;
            end--;
        }else if(arr[start]+arr[end]<k){
            start++;
        }else{
            end--;
        }
    }
    return occurances
}


console.log(findPairs(arr,k));















