
import './App.css'
import IntroRenderer from './compontents/IntroRenderer'
import ScoreBoard from './compontents/ScoreBoard'
import EvenNumberGenerator from './compontents/EvenNumberGenerator'
import { Routes, Router, BrowseRoute } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <IntroRenderer /> */}
      {/* <ScoreBoard /> */}
      {/* <EvenNumberGenerator /> */}
      <Routes>
        <Route path='/' element={<IntroRenderer />} />
        <Route path='/scoreboard' element={<ScoreBoard />} />
        <Route path='/even-number-generator' element={<EvenNumberGenerator />} />
      </Routes>
    </>
  )
}

export default App
