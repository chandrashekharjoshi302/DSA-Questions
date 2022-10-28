// Question Prime

function Prime(num){

    let count = 0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++

        }

    }
if(count==2){
    console.log("it is a prime");
}else{
    console.log("not prime");
}
   
}

Prime(17)
