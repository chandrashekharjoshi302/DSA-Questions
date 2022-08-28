
let obj = {
    movie : "RRR",
    food : "Gol Gappa",
    sports : "cricket"
   };
   
   // Dot Notation
   delete obj.movie;
   console.log(obj);
   
   
   // Bracket Notation
   delete obj["sports"];
   console.log(obj);