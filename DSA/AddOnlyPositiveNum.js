// Question AddOnlyPositiveNum

function AddOnlyPositiveNum(arr){

    let bag = 0
for(let i=0;i<arr.length;i++){
if(arr[i]>0){
    bag+=arr[i]
  
}


}
console.log(bag)
}

AddOnlyPositiveNum([1,2,3,4,5,-1,-2,-3])