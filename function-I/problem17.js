// problem5: Write a function to replace space with "-"

function replace(sen){
    let new_str="";
    
    for (let i=0;i<=sen.length-1;i++){
      if(sen[i]==" "){
        new_str=new_str+"-";
      } else{
        new_str=new_str+sen[i];
      }
    }
    
    console.log(new_str);
  }
  
  replace("My name is Bruce Wayne");
