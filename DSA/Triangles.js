// Question 
// chaeck Triamgles is Scalene,isosceles , equilateral

function Triangles(a1,a2,a3){
    if(a1===a2===a3){
        console.log("equilateral");
    }else if(a1==a2 || a2===a3 || a1==a3){
    console.log("Scalene");
    }else {
        console.log("isosceles");
    }

}