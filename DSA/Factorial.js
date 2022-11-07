
//1..

function check(N){
let bag = 1
for(let i=1;i<=N;i++){
  bag*=i
}
  console.log(bag)
}
check(5)


//2..


function check(N){

if(N==1|| N==0){
    return 1
  }
  
    return check(N-1)*N
  
  
    
  }
  
  
  console.log(check(5))
  