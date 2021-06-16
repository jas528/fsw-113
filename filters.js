

//Create 10 rows of test data from the sample data.
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2001-01-03'),
      "capacity": 8
    
    },

    
    {
      "color": "red",
      "type": "Porsh",
      "registration": new Date('2002-03-03'),
      "capacity": 5
    },  {
        "color": "yellow",
        "type": "minivan Porsh",
        "registration": new Date('2003-01-03'),
        "capacity": 7
      },

  
  
    {
        "color": "yellow",
        "type": "minivan Porsh",
        "registration": new Date('2003-01-03'),
        "capacity": 7
      },  {
      "color": "red",
      "type": "minivan Porsh",
      "registration": new Date('2003-01-03'),
      "capacity": 7
    },  {
      "color": "yellow",
      "type": "minivan Porsh",
      "registration": new Date('2003-01-03'),
      "capacity": 7
    },  {
      "color": "yellow",
      "type": "minivan Porsh",
      "registration": new Date('2003-01-03'),
      "capacity": 7
    },  {
      "color": "blue",
      "type": "minivan Porsh",
      "registration": new Date('2003-01-03'),
      "capacity": 7
    },  {
      "color": "green",
      "type": "minivan Porsh",
      "registration": new Date('2003-01-03'),
      "capacity": 7
    }]
  
    // {
    //     "color": "purple",
    //     "type": "minivan",
    //     "registration": new Date('2001-01-03'),
    //     "capacity": 8
      
   

    //Create a call back function to filter all cars with color="red".
let redCars = cars.filter(car => car.color === "red");
console.log(redCars);

let greenCars = cars.filter(car => car.color === "green"||car.color ==="red");
console.log(greenCars);

