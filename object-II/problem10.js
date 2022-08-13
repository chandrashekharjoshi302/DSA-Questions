// From the gievn two arrays, make a data array

let products=["macbook", "speaker", "iphone 13", "ipad"];

let price=[180000, 10000, 71000, 55000];

// [
//   {name:"macbook", price:180000},

//   {name:"speakers", price:10000},

//   {name:"iphone 13", price:71000},

//   {name:"ipad", price:55000}
// ]

let arr=[];

for (let i=0;i<=products.length-1;i++){
  let obj={};
  obj["name"]=products[i];
  obj["price"]=price[i];
  arr.push(obj);
}

console.log(arr);