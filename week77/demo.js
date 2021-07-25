


const fetch = require('node-fetch')
const starWarsApi = 'https://swapi.dev/api/'

const starWarCitizenURL = `$(starWarApi)/people/1`
 
    fetch (starWarCitizenURL,{
    method: 'GET',
    heasders:{
        "Content-Type": "application/json"
    }
    })
        .then(response=>response.json())
       .then(data=>{
        console.log('Sucess:', data);
    })
.catch ((error)=> {
    console.error('Error:',error);
})