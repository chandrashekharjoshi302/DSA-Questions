

// Problem 1 :

// let N = 15;

// 1 : 1
// 2 : 4
// 3 : 9
// 4 : 16
// ...
// ...
// ...

// 1 : 1
// 2 : 2


let N = 15;
let obj = {} ;

for(let i=1; i<=N; i++)
{
   obj[i] = i**2 ;
}

for(let key in obj)
  {
    console.log(key,":",obj[key]);
  }