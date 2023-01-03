
// type - 2 

function findPairs(arr,k){

    let start = 0;
    let end = arr.length-1;
    
    while(start<end){
        if(arr[start]+arr[end]==k){
            return [start, end]
        }
        else if(arr[start]+arr[end]<k){
            start++
        }else{
            end--
        }
    }
    return false
}

console.log(findPairs(arr,k));

