//calculate the perimeter and area of a rectangle

let obj={
    l:10,
    b:5,
    area: function(){
      return this.l*this.b;
    },
    perimeter: function(){
      return 2*(this.l+this.b);
    }
  }
  
  let rec_area= obj["area"]();
  
  let rec_peri=obj["perimeter"]();
  
  console.log(rec_area);
  console.log(rec_peri);