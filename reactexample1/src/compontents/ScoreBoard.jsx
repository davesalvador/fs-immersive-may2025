import { useState } from 'react'

function ScoreBoard() {
  const [score, setScore] = useState(10)

  const handleIncrease = () => {
    setScore(score + 2)
  }

  const handleDecrease = () => {
    setScore(score - 2)
  }

  return (
    <div>
      <div>{score}</div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default ScoreBoard