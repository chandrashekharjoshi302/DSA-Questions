// Male ==> 21 years
// Female ==> 18 Years

// when the gender is male and also age is more than or equal to 21, print "male cam marry".

// when the gender is female and also age is more than or equal to 18, print "Female can marry".

let gender="female";

let age=19;

if(gender=="male"){
  if(age>=21){
    console.log("Male is Eligible");
  } else {
    console.log("Male is not eligibe");
  }
} else if(gender=="female"){
  if(age>=18){
    console.log("Female is Eligible");
  } else {
    console.log("Female is not eligibe");
  }
} else {
  console.log("Wrong Input");
}