let data=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];

for (let i=0;i<=data.length-1;i++){
  let obj=data[i];
  let total1=0;
  let total2=0;
  let students_arr=obj["students"];
  let max_student;
  let max_marks;
  for (let j=0;j<=students_arr[0]["marks"].length-1;j++){
    total1=total1+students_arr[0]["marks"][j];
    total2=total2+students_arr[1]["marks"][j];
    if(total1>total2){
      max_marks=total1;
      max_student=students_arr[0]["name"];
    } else {
      max_marks=total2;
      max_student=students_arr[1]["name"];
    }
  }
  console.log(obj["grade"]+"-"+max_student+"-"+max_marks);
}