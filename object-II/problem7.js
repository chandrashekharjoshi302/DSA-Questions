let products=[
    {name:"macbook",price:150000,rating:4.5},
    {name:"iphone 13",price:71000,rating:4},
    {name:"airpods",price:20000,rating:3.8},
    {name:"charger",price:400,rating:2.5},
    {name:"ipad",price:55000,rating:3}
  ];
  
  for (let i=0;i<=products.length-1;i++){
    let pro=products[i];
    if(pro["rating"]>3){
      console.log(pro["name"]);
    }
  }