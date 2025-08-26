const express = require('express');
const cors = require('cors'); // import CORS for cross origin request

// your app runs at http://localhost:3000
// API runs at http://api.example.com
//without cors, the browser would block cross-origin requests

const { users, products } = require('./data');
const app = express(); //Create Express App
const PORT = 5000 // Set port number 


// Middleware
app.use(cors()) // Enable CORS for all routes
app.use(express.json()) // Parse JSON request body


//Home Route 
app.get('/', (req,res) => {
    res.json({
        message: "Backend API is running"
    })
})

// GET All users
app.get('/users', (req, res) => {  // handle GET request to /users
    res.json({                      // send users array as json
        success: true,              // Status flag 
        data: users                 // The actual users data
    })
})


// GET all products
app.get('/products', (req, res) => {  // handle GET request to /products
    res.json({                       // send products array as json
        success: true,               // Status flag
        data: products               // The actual products data
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

