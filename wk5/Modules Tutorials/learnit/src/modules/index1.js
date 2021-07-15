// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//Clo1:
//import { Course, Session } from "./module1" // .js ext is not required
//console.log( "From Module 1", Course)
//console.log( "From Module 1", Session)

//Clo2:
//import { Course as CourseId, Session } from "./module2" // .js ext is not required
//console.log( "From Module 2", CourseId)
//console.log( "From Module 2", Session)

//Clo3:
//import { Course as CourseId , Session } from "./module3" // .js ext is not required
//console.log( "From Module 3", Course)
//console.log( "From Module 3", Session)

//Clo4:
// console.log("Load index.js.... Start")
// import { Course as CourseId , Session } from "./module4" // .js ext is not required
// console.log( "From Module 4", Course)
// console.log( "From Module 4", Session)

// console.log("Load index.js.... End")
 
// //Clo5:import Course  from "./module5 // .js ext is not required
// console.log( "From Module 5", Course)

//unterminated string constant

//CLo6:
// import { default as Course}  from "./module6" // .js ext is not required
// console.log( "From Module 6", Course)

//Clo7:
//import { default as Course}  from "./module7" // .js ext is not required
//console.log( "From Module 7", Course)

//Clo8:
// import { default as Course, liveSession as Session}  from "./module8" // .js ext is not required
// console.log( "From Module 8", Course)
// console.log( "From Module 8", Session)

//clo9
// import *  as mod from "./module9" // .js ext is not required
// console.log( "From Module 9", mod.courseName)
// console.log( "From Module 9", mod.liveSession)
//Module not found: Can't resolve './module9' in

//clo10:
// import{ courseName as Course, liveSession as Session} "./module10" // .js ext is not required

// courseName ="FSW220"
// console.log( "From Module 10", courseName)
// console.log( "From Module 10", liveSession)
//courseName ="FSW220"
 //| console.log( "From Module 10", courseName)

 //clo11:
//  

//import *  as mod from "./module11" // .js ext is not required

//  mod.courseName = "FSW220"
//   mod.liveSession = "Spring2020"
// console.log( "From Module 11", mod.courseName)

//clo12:
// let courseName ="FSW113"
// let liveSession = "02/02/2020"

// let combine = function( ){

//   return ` CourseName = ${courseName}  in ${liveSession} `

// }
// export {courseName ,  liveSession, combine}
// Attempted import error: 'combine' is not exported from './module11' (imported as 'mod').

// import *  as mod from "./module11" // .js ext is not required

 



// console.log( "From Module 12", mod.courseName)
// console.log( "From Module 12", mod.liveSession)

// console.log( "From Module 12", mod.combine( ))

//Clo1:

import { default as Person } from "./Person1.js"
console.log( "From Person1.js ", typeof Person)

//Clo2:
//import { default as Person } from "./Person3"
//let person = new Person( )
//console.log(typeof person)
//console.log( person.hello( ))
//console.log( `is person instance of  Person  is ${ person instanceof Person}`)
//let person = new Person()
//Failed to compile.

// ./src/Person2.js
// SyntaxError: C:\Users\jasmine\dev\bryan-university\fsw-113\wk5\Modules Tutorials\learnit\src\Person2.js: Unexpected token, expected "{" (2:12)

//   1 | //Clo2:\
// > 2 | class Person(){
//     |             ^
//   3 |     hello() {
//   4 |  console.log("Hi I am a person")
//   5 |     }
 
//Clo3:
// 2 | class Person(){
//     |             ^
//   3 |     constructor(){
//   4 |     console.log  ("Constructing Person")
//   5 |     }


//Clo4: