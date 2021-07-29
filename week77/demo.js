


const fetch = require("node-fetch");
const starWarApi = 'https://swapi.dev/api/'

const starWarCitizenURL1 = `${starWarApi}/people/1`
const starWarCitizenURL2 = `${starWarApi}/people/2`

    fetch1 (starWarCitizenURL,{
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
    })
        .then(
            response=>response.json()
            )
       .then(data=>{
        console.log('Sucess:', data);
    })
.catch ((error)=> {
    console.error('Error:',error);
})

fetch2 (starWarCitizenURL,{
    method: 'GET',
    headers:{
        "Content-Type": "application/json"
    }
    })
        .then(
            response=>response.json()
            )
       .then(data=>{
        console.log('Sucess:', data);
    })
.catch ((error)=> {
    console.error('Error:',error);
})