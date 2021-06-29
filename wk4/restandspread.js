//Clo:1
// let studentGrades=[90,80,88,98]
// var result=[...studentGrades]
// console.log (result)
// console.log (result instanceof Array)
//[ 90, 80, 88, 98 ]
// true

//Clo:2
 //let myGrade="99"
//var result=[...myGrade]
//console.log(result)
// '9', '9'

// //Clo3
 //let studentGrades=[90,80,88,98]
 //var maxGrade=Math.max(...studentGrades)

 //console.log(maxGrade)
//98
 
// //Clo:4
 //let studentGrades=[90,80,88,98]
 //var gradeArray=[...studentGrades]
 //console.log (gradeArray)

// //Clo:4
 //let studentGrades=[...[,,]]
 //console.log(studentGrades)
//[undefined]

//let myhouseNumber=[..."8976"]
//console.log(Math.max(myhouseNumber))
//NaN


// //Clo:5
 //let myhouseNumber=[..."8976","AB","CDEF"]
 //console.log (Math.max(myhouseNumber))
//NaN



// //Clo7:

 //var studentName = "JamesMoore"
 //var dob="02/02/2002"
// var studentInfo={
  // [studentName]:studentName,
  //[dob]:dob}

 //console.log (studentInfo)

 //'JamesMoore', '02/02/2002': '02/02/2002'


//Clo:7
// var studentName="James Moore"
// var dob="02/02/2002"
// var studentInfo= {
// studentName,
// dob
// }
// console.log(studentInfo)
//'James Moore', dob: '02/02/2002' 



//Clo:8
// var studentName ="James Moore"
// var dob="02//02/2002"
// var studentInfo={
//     studentName,
//     dob,
//     currentAge(){
// var today= newDate()
// var dobDate= newDate(this.dob)
// var timeDiff=today.getTime()-dobDate.getTime()
// var days=timeDiff/(1000*3600*24*365)
// retuenMath.round(days)
//     }
// }
// var result=studentInfo.currentAge
// console.log(studentInfo)
//'James Moore',
//'02//02/2002',
//[Function: currentAge]


//Clo:9
// var studentName="James Moore"
// var dob="02/02/2002"
// var studentInfo={
//     studentName,
//     dob,
//     age:function(){
// var today = new Date()
// var dobDate=new Date (this.dob)     
// var timeDiff=today.getTime()-dobDate.getTime()  
// var days=  timeDiff /(1000*3600*24*365)
// return Math.round(days)
//     }
// }
// var result=studentInfo.age()
//     console.log(studentInfo)
    //'James Moore', dob: '02/02/2002', age: [Function: age] 


//Clo:10
// var studentName="James Moore"
// var dob ="02/02/2002"
// var studentInfo={
//     studentName,
//     dob,
//     ["ageOf Student"]: function(){
// var today= new Date()
//     var dobDate =new Date (this.dob)
//     var timeDiff=today.getTime()-dobDate.getTime()
//     var days= timeDiff/(1000*3600*24*365)
// return Math.round(days)
//     }
// }
// var result=studentInfo.["ageOf Student"] ()
// console.log(studentInfo)





//Clo:11
// var columnName = "Name";
// var name = {};
// var student = {
//   get [columnName]() {
//     return name;
//   },
//   set [columnName](value) {
//     name = value;
//   },
// };

// student.Name = "Harry Potter";
// console.log(student.Name); 