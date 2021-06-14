
// Clo1:
var temp=()=>104
console.log(typeof temp)
console.log(temp())

//a.function
//b.104

//Clo2:
var temp=multiplier=>104*multiplier
console.log(temp(2))
//a.208

//Clo3:
var temp=(multiplier,devider)=>104*multiplier/devider
console.log(temp(3,6))
//a.52

//Clo4:
var temp=(multiplier,divider)=>{//block
    let result=104*multiplier
    if(result){
        result=104/divider
    }
return result
}
 console.log(temp(3,6))
//this AudioContext,a very important concept
//a.17.3333333333333332


 //Clo5:
// //  var clickButton=function(
// //      'click', function(){
// //   console.log(this)
//  }

//Clo6:
var clickButton = function (){

    console.log(this)
 }
clickButton()
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
} */}
//
//Clo7:
var clickButton=()=>{

    console.log(this)
    
}
clickButton()
//a.{}

//Clo8:
var person =  {

    name : 'David Smith',

    age : 56,

    details: function ( ){

          console.log(this)

    }

}
 person.details( )
//a. { name: 'David Smith', age: 56, details: [Function: details] }

//Clo9:
var person =  {

    name : 'David Smith',

    age : 56,

    details: ( ) => {

          console.log(this)

    }

}
 person.details( )
 //a.C:\Users\jasmine\dev\bryan-university\fsw-113> 

 //Clo:10
 var temp  = ( ) 

   => 100
    console.log(temp)
    //) console.log(temp)