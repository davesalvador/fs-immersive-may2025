// destructuring usestate from react
// import { useState } from 'react'; 

// function App() {
//   //initialize usestate
//   // current state is color 
//   // setColor is the function that updates the color state
//   const [color, setColor] = useState("pink")

//   return (
//     <div>
//       <h1>My favorite color is: {color}</h1>
//       <button type='button' onClick={() => setColor("blue")}>
//         Change color
//       </button>
//     </div>
//   )
// }

// export default App



// What can state hold????
// can be used to keep track of strings, numbers, booleands, arrays, objects and any combinations of these!

// import { useState } from 'react';

// function Car() {
//   const [brands, setBrands] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState(2020);
//   const [color, setColor] = useState("Red");


//   return (
//     <div>
//       <h1>My car {brands}</h1> 
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
      
//     </div>
//   )
// }

// export default Car


import { useState } from 'react';


function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    color: "Red"
  })

// const updateColor = () => {
//   setCar(previousState => {
//     return { ...previousState, color: "Blue" }
//   })
// }

const changeCar = () => {
  setCar({
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Black"
  })
}

  return (
    <div>
      <h1>My car is {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button type='button' onClick={changeCar}>
        Change color
      </button>
    </div>
  )
}

export default Car