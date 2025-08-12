// //Set Timeout example

// import { useState, useEffect } from 'react'


// import './App.css'
// import { use } from 'react'

// "/"

// //useEffect(<function>, <dependency>)
// function App() {
// const [count, setCount] = useState(0)
// const [calculation, setCalculation] = useState(0)


// // 1. UseEffect behaviour
// // useEffect(() => {
// //   // runs on every render
// // })

// // useEffect(()=>{
// //   setTimeout(() => {
// //     setCount((count) => count + 1)
// //   }, 1000)
// // })

// // 2.
// // useEffect(() => {
// //   // run only on the first render
// // }, [])

// // useEffect(()=>{
// //   setTimeout(() => {
// //     setCount((count) => count + 1)
// //   }, 1000)
// // }, [])


// // useEffect(() => {
// //   // run on the first render
// //   // add any item any dependency value changes
// // }, [props, state])

// useEffect(() => {
//   setCalculation(() => count * 2)
// }, [count])

//   return (
//     <>
//       <h1>Count : {count} times</h1>

//       <button onClick={() => setCount((count) => count + 1)}>Increment</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   )
// }

// export default App


import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>Ive rendered {count} times</div>
  )
}

export default App