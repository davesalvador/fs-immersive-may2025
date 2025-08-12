
import { useState } from 'react'
import './App.css'

function App() {
  // state for item quantity
  const [quantity, setQuantity] = useState(0)

  // increase quantity by 1
  const increaseQuantity = () => {
    setQuantity(prev  => prev  + 1)
  }

  //decrease quantity by 1
  const decreaseQuantity = () => {
    setQuantity(prev  => prev  - 1)
  }

  // reset to 0
  const resetQuantity = () => {
    setQuantity(0)
  }

  return (
    <>
      <h2>Shopping Cart</h2>
      <p>Quantity: {quantity}</p>

      <button onClick={increaseQuantity}>Increase</button>
      <button onClick={decreaseQuantity}>Decrease</button>
      <button onClick={resetQuantity}>Reset</button>
    </>
  )
}

export default App
