import React, { useEffect, useState } from 'react'

const randomEvenNumber = () => {
  return Math.floor(Math.random() * 100 + 1) * 2
}

function EvenNumberGenerator() {
    const [evenNumber, setEvenNumber] = useState(randomEvenNumber)

    useEffect(() => {
   const intervalId = setInterval(() => {
        setEvenNumber(randomEvenNumber())
      }, 5000)

      return () => clearInterval(intervalId)
    }, [])

  return (
    <div>
      <h2>Random even number: {evenNumber} </h2>
    </div>
  )
}

export default EvenNumberGenerator