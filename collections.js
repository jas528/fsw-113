//Clo:1
// var students=[
// {name:"James",dob:"01/01/2000"},
// {name:"Mandy", dob:"01/01/2001"},
// {name:"Sandy",dob:"01/01/2002"},
// {name: "Harry",dob:"01/01/2003"},
// ]
//  for(var student of students){
// console.log(student)
//  }
 //{ name: 'James', dob: '01/01/2000' }
//{ name: 'Mandy', dob: '01/01/2001' }
//{ name: 'Sandy', dob: '01/01/2002' }
//{ name: 'Harry', dob: '01/01/2003' }
 
 //for(var student of students){
//     console.log('Name = ${student.name},Date Of Birth = ${student.dob}')
    
//}{ name: 'James', dob: '01/01/2000' }
//{ name: 'Mandy', dob: '01/01/2001' }
//{ name: 'Sandy', dob: '01/01/2002' }
//{ name: 'Harry', dob: '01/01/2003' }
 
// for(var student of students){
//   const{name,dob: dateOfBirth}=student
//    console.log('Name=${name}, Date Of Birth=${dateOfBirth}');
 
// { name: 'James', dob: '01/01/2000' }
// { name: 'Mandy', dob: '01/01/2001' }
// { name: 'Sandy', dob: '01/01/2002' }
//{ name: 'Harry', dob: '01/01/2003' }
    
//     //Clo:2
// var students=[
// {name:"James", dob: "01/01/2000"},
// {name:"Mandy", dob: "01/01/2001"},
// {name:"Sandy", dob: "01/01/2002"},
// {name:"Harry", dob: "01/01/2003"},
// ];

// var studentDetails=students.map((student)=>{
//     let newInfo={...student,name:
//         student.name.toUpperCase(), college:"BU"};
//     return newInfo;
// });
// for (var student of studentDetails){
//  const {name,dob:dateOfBirth,college}=student;
//  console.log('Name=${name},Date Of Birth=${dateOfBirth}University=${college)


// //Clo3:
// var student=[
// {name: "James",dob:"01/01/2000"},
// {name: "Mandy", dob: "01/01/2001"},
// {name:"Sandy",dob: "01/01/2002"},
// {name:"Harry",dob: "01/01/2003"},
// }


// //Clo4:
var studensts=[
{name:"James",dob: "01/01/2000"},
{name:"Mandy",dob: "01/01/2001"},
{name:"Sandy",dob: "01/01/2002"},
{name:"Harry",dob:"01/01/2003"},
];
var studentToSearch={name:"Mandy",dob:
"01/01/2001"};
var result=students.filter((student)=>
student.name==studentToSearch.name);
console.log(result);

// //Clo5:
var students=[
{name:"James",dob:"01/01/2000"},
{name:"Mandy",dob: "01/01/2001"},
{name:"Sandy",dob: "01/01/2002"},
{name:"Harry",dob: 01/01/2003},

{name:"Mandy", dob:"01/01/2020"},</strong
>
];
var studentToSearch={name:"Mandy",dob:
"01/01/2001"};
var result=student.filter(student)=>
student.name==studentToSeacrh.name);

console.log(result);  
