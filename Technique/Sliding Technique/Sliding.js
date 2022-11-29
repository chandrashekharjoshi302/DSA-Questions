
// Given an array of integers of size 'n'. Calculate the maximun sun possible
// for 'k' consecutive elements in the array.
 
// Input : [10,20,30,40,50,60,70]

// k = 3

// Output : 100 

const arr = [10,20,30,40,50,60,70];
const k = 3;

function maxSum(arr,k){
    if(k>arr.length){
        return "invalid";
    }
  
    let windowTotal = 0;
    for(let i=0;i<k;i++){
        windowTotal +=arr[i]
    }

    // const arr = [10,20,30,40,50,60,70]
    // const k = 3;

    let maxSumResult = windowTotal;
    for(let i=k;i<arr.lenght ;i++){
        windowTotal +=arr[i] - arr[i-k]
        maxSumResult = Math.max(windowTotal,maxSumResult)
    }
    return maxSumResult
}

console.log(maxSum(arr,k))


// 60
// 60+30-10
// 60+40-20
// 60+50-30
// 60+60-40
// 60+70-50

