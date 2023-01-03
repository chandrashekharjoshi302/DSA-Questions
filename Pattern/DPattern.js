// * * * * *
// *       *
// *       *
// *       *
// * * * * *



function myFun(input){

    for(let i=0;i<input;i++){
        let bag = ""
        for(let j=0;j<input;j++){
            if(i==0||i==4){
                bag+="*"+" "
            }else if(j===0 || j==4){
                bag+="*"+" "
            }else{
                bag+=" "
            }
        }
        console.log(bag)

    }
}