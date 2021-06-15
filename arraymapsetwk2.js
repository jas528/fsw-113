//clo1: Javascript
let studentArray = Array(10)
 console.log//(studentArray.length)
 console.log//(studentArray)
10



 //Clo2:
 let studentArray = Array.of(10)
 console.log(studentArray.length)

console.log//(studentArray)
1


//Clo 3:
let grades = [90,98,78,99]

let studentGrades = Array.from(grades, g=> g * 110);
console.log(studentGrades.length)
console.log(studentGrades)
 4
[ 9900,10780, 8580,10890]



//Clo4:
let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});
 console.log(studentGrades)
[99.000000000000001,107.80000000000001,85.80000000000001,108.9]


 //Clo5:
 let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=>{
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});
 console.log(studentGrades)
 [NaN,NaN,NaN,NaN]



//Clo6:
let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v== 90)
console.log(studentGrades)
90



//Clo7:
let grades = [90,98,78,99]
let studentGrades = grades.find(v => v >= 90)
console.log(studentGrades)
.90



//Clo8:
let grades = [90,98,78,99]
let studentGrades = grades.map(v => v *.090)
console.log(studentsGrades)
//g.

//clo9:
let grades = [90,98,78,99]
let studentGrades = grades
console.log(studentGrades)



//cl:10
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")
console.log(people)
{name: 'John Masson'} = 'Student',
{name: 'Dave Larson'} = 'Adjunct'


//Clo11:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.delete(student)
console.log(people)
 {name: 'Dave Larson' } => 'Adjunct'}


//Clo12:
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.clear()
console.log(people)



 //Clo13:
 let student = {name:'John Masson'}
 let adjunct = {name:'Dave Larson'}
 let people = new Map()
 
 people.set(student, "Student")
 people.set(adjunct, "Adjunct")
 
 let result = people.has(student);
 console.log(result)
l.true


 //CLo: 14
 let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.keys(student);
console.log(result)
 { 'John Masson'}{name: 'Dave Larson'}


//Clo: 15
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student);
console.log(result)
{'Student','Adjunct'}



//Clo: 16
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new WeakMap()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

ladjunct = null
 console.log(people.size)
console.log(people.size)




//Clo: 17
let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)

console.log(people.size)
2


//Clo: 17
let students =[ {name:'John Masson'}, {name:'Don Vasco'}, 
{name:'Mary Landley'}
let people = new Set(students)

console.log(people.has({name:'Dave Vasco'})