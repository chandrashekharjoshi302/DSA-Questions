let products=["iphone", "macbook", "speakers", "earphones"];

let search="AIRPODS";

let isPresent;
let product;

for (let i=0;i<=products.length-1;i++){
  if(search==products[i]){
    isPresent=products[i];
  } else {
    isPresent=null;
  }
}

if(isPresent==null){
  console.log(search,"not present");
} else {
  console.log(isPresent,"Present");
}

//airpods are absent