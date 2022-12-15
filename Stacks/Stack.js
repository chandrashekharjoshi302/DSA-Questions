

// initially array of size 5 
// array = [0,0,0,0,0]

let array = new Array(5).fill(0)

// console.log(array)

let top = -1;
push(5);
push(4);
push(3);
push(2);
push(1);
push(100);
pop()
pop()
pop()
pop()
pop()


function push(data){
    if(top==array.length-1){
        console.log("overflow")
        return
    }
    top++
    array[top] = data;
}

function peek(){
    if(top == -1){
        console.log("undreflow")
        return;
    }
    console.log(array[top])
    return 
}


function isFull(){
    if(top==array.length-1){
        return
    }
    return false
}

function sizeOftheStack(){
    return top+1;

}
function pop(){
    if(top== -1){
        console.log("undreflow")
        return
    }
    console.log(array[top])
    top--
    return 
}