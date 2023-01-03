// *
// *
// *
// *
// *****



function myFun(input){
    for(let i=0;i<input;i++){
        for(let j=0;j<input;j++){
            if(i==0){
                bag+="*"+" "
            }else if(j==4){
                bag+="*"+" "
                
            }else{
                bag+=" "
            }
        }
        console.log(bag)
    }
}