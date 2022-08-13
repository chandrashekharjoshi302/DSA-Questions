let products=["macbook", "iphone 13", "ipad", "airpods"];
let price=[150000,71000,55000,20000];
/*
[

{name:"macbook",price:15000},
{name:"iphone 13",price:71000},
{name:"ipad",price:55000},
{name:"airpods",price:20000},

]
*/
let arr=[];
for (let i=0;i<=products.length-1;i++){
  let obj={}; // it is inside the loop because i need to take it for every product
  obj["name"] = products[i];
  obj["price"]= price[i];
  arr.push(obj);
}

console.log(arr);