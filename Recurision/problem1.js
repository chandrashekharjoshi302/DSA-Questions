// Defining Problem in turn by itself.....

// function callName(N){
//     if(N%2==0){
//         return "it's Prime Number"
//     }
//     N=N+1
//     return N

// }

// let result = callName(5)
// console.log(result)


// function x(n){
//     if(n%2==0){
//         n=n+1
//     } 
//         return n*10

   
// }
// let result = x(2)
// console.log(result)

// function x(n){
//     if(n%2==0){
//         return n
//     }
//     return n*10
// }
// let result = x(11)
// console.log(result)



// function factorialof5(){
//     return 5* factorialof4()
// }

// function factorialof4(){
//     return 4* factorialof3()
// }

// function factorialof3(){
//     return 3*factorialof2()
// }
// function factorialof2(){
//     return 2*factorialof1()
// }
// function factorialof1(){
//     return 1;
// }

// let result = factorialof5(5)

// console.log(result)

// function factorial(N){
//     if(N===0 || N==1){
//         return 1
//     }
//     return N* factorial(N-1)
// }

// let result = factorial(6)
// console.log(result)


var arr = [1,2,3,4,5]
printArray(arr,0)

function printArray(arr,index){

    if(index==arr.length){
        return

    }
    console.log(arr[index])
    printArray(arr,index+1)
        
    }
  
