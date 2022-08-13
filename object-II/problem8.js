// Calculate the average rating of all the products
let products=[
    {name:"macbook",price:150000,rating:4.5},
    {name:"iphone 13",price:71000,rating:4},
    {name:"airpods",price:20000,rating:3.8},
    {name:"charger",price:400,rating:2.5},
    {name:"ipad",price:55000,rating:3}
  ];
  
  let sum=0;
  
  for (let i=0;i<=products.length-1;i++){
    let pro=products[i];
    sum=sum+pro["rating"];
  }
  console.log(sum/products.length);