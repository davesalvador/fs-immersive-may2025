main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
Home.jsx

import React from 'react'
import { Link } from 'react-router-dom'

function Home({ itemsData }) {
  return (
    <main style= {{ fontFamily:'sans-serif', padding: '1rem'}}>
        <h1>Items</h1>
        <p>Click any item to view it's details</p>

        <ul>
          {itemsData.map(item => (
            <li key={item.id} style={{margin: '0.5rem 0', padding: '0.5rem', border: '1px solid #ccc'}}>
              <Link to={/detail/${item.id}}>{item.name}</Link>
              <strong>{item.name}</strong>
              <strong>{item.description}</strong>
            </li>
          ))}
        </ul>

    </main>
  )
}

export default Home