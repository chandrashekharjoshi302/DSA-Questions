//Print Half Pyramid after 180 degree rotation

//     *
//    **
//   ***
//  ****
// *****

for(let i=1;i<=5;i++){
    let bag = ""
    for(let j=1;j<=5;j++){
      if(j<=5-i){
        bag+=" "
      }else{
        bag+="*"
        
      }
    
    }
    console.log(bag)
    
  }
  
    