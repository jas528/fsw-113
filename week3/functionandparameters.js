//Clo:1 
let studentGrades=[.90,80,88,98]
let curveGrades=function(grades,percentage=1.10){
    console.log(grades,percentage)
    var newGrades=grades.map(grade=>{
        return grade * percentage
    })
    return newGrades
}
var result=curveGrades(studentGrades,2)
 console.log(result)
//[ 1.8, 160, 176, 196 ]

//Clo2:
  let studentGrades=[90,80,88,98]
let curveGrages=function(grades,percentage=1.10){
    console.log(grades,percentage)
    var newGrades=grades,percentage
//})
    return newGrades
    var result=curveGrades(studentGrade)
//}
//[ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]


//     //clo:3
let studentGrades=[90,80,88,98]
let curveGrades=function(grades,percentage=
    1.100){
        var newGrades=grades.map(grade=>{
return grade *percentage
    })
    return newGrades
}
var result=curveGrades(studentGrades,1.33)
console.log(result)
[ 119.7, 106.4, 117.04, 130.34 ]

// //Clo4:
let studentGrades=[90,80,88,98]
let curveGrages=function(grades,percentage=1.10){
      
       
       var newGrades=grades.map(grade=>{
           return grade*percentage
        
        })
        return newGrades
}
//[ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]
        //var result=curveGrages(studentGrades)

 //console.log(result)
            
    

    //Clo5:
    let studentGrades= [90,80,88,98]
    let curveGrades=function(percentage=1.10,...grades){
        console.log(grades,percentage)
        var newGrades=grades.map(grade=>{
        })
    return newGrades * percentage
    }

var result=curveGrades(1.24,...studentGrades)

 console.log (result)
//[90,80,88,98]1.24

 //Clo6:
 let studentsGrades=[90,80,88,98]
 let curveGrages=function(percentage = 1.10,...grades){
        var newGrades=grades.map(grade=>{
           return grade * percentage

     })
    return newGrades
    
 }
    var result=curveGrages(undefined,...studentsGrades)
 console.log (result)
// [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]

        //Clo7:
         let studentGrades=[90,80,88,98]
        let percentageCurve=0.98
        let curveGrages=function(percentage= percentageCurve,...grades){
        var  newGrades=grades.map(grade=>{
         return grade*percentage
})
        console.log (result)
         return newGrades
       
}
// var result=curveGrages(undefined,...studentGrades)
// console.log (result)
// [ 88.2, 78.4, 86.24, 96.03999999999999 ]


            //Clo:8
            
                  // [ 88.2, 78.4, 86.24, 96.03999999999999 ]
                    

                    //Clo9:
                    let studentGrades=[90,80,88,98]
                    const avg=function(array){
                        let avgerage =array.reduce((a,b)=>a+b,0)
                        return avgerage/array.length/100

                    }
                    let curveGrages=function(percentage=avg(studentsGrades),...grades){
                            var newGrades=grades.map(grade=>{
                            return grade *percentage
                        })
                        
                        return newGrades
                    }
                        var result=curveGrages(1.3,68,56,...studentGrades)
                        console.log (result)
                    //[ 88.2, 78.4, 86.24, 96.03999999999999 ]

                    //Clo9:

                    let count= newFunction("grades","...grades.length")

                    var result =count([90,80,88,98])


                    console.log (result)
                    return newGrades
        

                
                
                }        
