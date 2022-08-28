

// Problem 6 : Given a string, count the alphabets and digits

let str = "masai123"

// o/p  :
// alpha - 5
// digits - 3

let alpha = 0;
let digits = 0;

for(let i=0; i<str.length; i++){

  if(str[i]>=0 && str[i]<=9){
    digits++;
  }
  else{
    alpha++;
  }
  
}


// for(let i=0; i<str.length; i++){

//   if((str[i]>='A' && str[i]<='Z') || (str[i]>='a' && str[i]<='z')){
//     alpha++;
//   }
 
//   else{
//     digits++;
//   }
  
// }




console.log("alpha ",alpha);
console.log("digits ",digits);