// get the names of those emps who have salary more than 25000
let emp_data=[
    {name:"Ajay", age:45, salary:25000},
    {name:"Chunnu", age:24, salary:35000},
    {name:"Aman", age:45, salary:20000},
    {name:"Pulkit", age:45, salary:20000},
    {name:"Varun", age:45, salary:45000}
  ];
  
  for (let i=0;i<=emp_data.length-1;i++){
    let obj=emp_data[i];
    if(obj["salary"]>25000){
      console.log(obj["name"]);
    }
  }
  
  