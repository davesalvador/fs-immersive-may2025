import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import './App.css'


const itemsData = [
  {
    id: 1,
    name: "Laptop Pro X1",
    description: "High-performance laptop featuring Intel i7 processor, 16GB DDR4 RAM, 512GB NVMe SSD, NVIDIA GTX graphics card, and 15.6-inch 4K display. Perfect for professional work, content creation, gaming, and development tasks."
  },
  {
    id: 2,
    name: "Wireless Headphones Elite",
    description: "Premium noise-canceling wireless headphones with 30-hour battery life, crystal-clear audio quality, and active noise cancellation technology. Features Bluetooth 5.0 connectivity and comfortable over-ear design."
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    description: "Advanced fitness tracking smartwatch with heart rate monitor, GPS navigation, sleep tracking, and 7-day battery life. Includes workout modes and smartphone notifications integration."
  },
  {
    id: 4,
    name: "Gaming Mouse Pro",
    description: "Ergonomic gaming mouse with RGB lighting, 12 programmable buttons, and 16000 DPI optical sensor. Designed for competitive gaming with ultra-responsive clicks and customizable weight system."
  },
  {
    id: 5,
    name: "Mechanical Keyboard RGB",
    description: "Premium mechanical keyboard with Cherry MX Blue switches, full RGB backlighting, and aircraft-grade aluminum frame. Features N-key rollover and programmable macro keys for enhanced productivity."
  }
  ]

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home itemsData={itemsData} />} />
      <Route path="/detail/:id" element={<Detail itemsData={itemsData} />} />
    </Routes>
  )
}

export default App