// * * * * *
// *
// *
// *
// * * * * *

function MyFun(input){

    for(let i=0;i<input;i++){
        let bag = ""
        for(let j=0;j<input;j++){
            if(i==0 || i==5){
                bag+="*"+" "
            }else if(j==1){
                bag+="*"+" "
            }else{
                bag+=" "
            }

        }
        console.log(bag)
    }
}