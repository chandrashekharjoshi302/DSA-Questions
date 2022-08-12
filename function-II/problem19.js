// My split function, Do the dry run to understand

function mySplit(sen){
    let arr=[];
    let word="";
    for (let i=0;i<=sen.length-1;i++){
      if(sen[i]!=" "){
        word=word+sen[i];
      } else if(sen[i]==" "){
        if(word!=""){
          arr.push(word);
        }
        word="";
      }
    }
    arr.push(word);
    console.log(arr);
  }
  
  mySplit("my name is             chunnu");