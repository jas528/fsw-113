const fetch = require('node-fetch')
const URL = 'https://swapi.dev/api/'
const peopleEndPoint = `${URL}people`
 let peopleData = []
const getData =function(id){
    const idEndPoint =`${peopleEndPoint}/${id}` //https://swapi.dev/api/people/1/
    fetch (idEndPoint)
    .then (response=> response.json())
    .then (data=>{
        //peopleData ={...peopleData,data}
        
        //console.log('${date}=======>>>>>>>'.id) 
        //peopleData ={...peopleData,data}
    // pending, fullfill, reject
        console.log(data)
    })
}
    var ids = [2,3,6,10,20,30,300]
    
    ids.forEach(id=>{
        
     getData(id)
//console.log(id)

    })

console.log(peopleData);
