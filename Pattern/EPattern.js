// * * * * *
// *
// * * * * *
// *
// * * * * *



function myFun(input){

    for(let i=0;i<input;i++){
        let bag = ""
        for(let j=0;j<input;j++){
            if(i%2==1){
                bag+="*"
            }else{
                bag+="*"
            }
        }
        console.log(bag)
    }
}

myFun(input)