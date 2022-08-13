// calculate the area of a triangle
// formula = 0.5*b*h (right angled traingle)

let triangle={
    height: 10,
    base: 20,
  
    area: function(){
      return 0.5*this.height*this.base;
    }
  }
  
  let area_triangle=triangle["area"]();
  
  console.log(area_triangle);