
//    *
//   * *
//  * * *
// *     *




function MyFun(input) {
  
    for (let i = 0; i <input; i++) {
    
  let bag = ""
      for (let j = 0; j < input; j++) {
        let mid = Math.ceil(input / j)
  
        if (mid === j) {
          bag += "*"+" "
  
        }else if(mid+1==j ||mid-1==j ){
           bag += "*"+" "
        }
        else {
          bag += "$"
        }
      }
      console.log(bag)
    }
  
  }
  
  MyFun(5)
  
  