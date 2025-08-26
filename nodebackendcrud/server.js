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


app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the id from the URL and convert to number
    const user = users.find(u => u.id === id); // Find user by id

    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    res.json({
        success: true,
        data: user
    });

});

app.post('/users', (req, res) => { //Create a new user
    const { name, email } = req.body;  // get name and email from request body

    if (!name || !email){
        return res.status(400).json({
            success: false,
            message: 'Name and email are required'
        });
    }

    const newUser = {
        id: users.length + 1, // simple id generation
        name: name,
        email: email
    }

    users.push(newUser); // add new user to users array

    res.status(201).json({
        success: true,
        data: newUser
    });

})


app.put('/users/:id', (req, res) => { // Update an existing user
    const id = parseInt(req.params.id); // Get the id from the URL and convert to number
    const userIndex = users. findIndex(u => u.id === id); // Find user index by id

    if(userIndex === -1){ // if the user is not existing
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    const { name, email } = req.body; // Get name and email from request body
    users[userIndex] = { id, name, email }; // update user in array

    res.json({
        success: true,
        data: users[userIndex]
    });

})

app.delete('/users/:id', (req, res) => { // Delete a user
    const id = parseInt(req.params.id); // Get the id from the URL and convert to number
    const userIndex = users.findIndex(u => u.id === id); // Find user index by id

    if (userIndex === -1) { // if the user is not existing
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    users.splice(userIndex, 1); // Remove user from array

    res.json({
        success: true,
        message: 'User deleted successfully'
    });
})




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

