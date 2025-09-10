import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { connectDB } from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import { errorHandler, notFound } from './middleware/error.js';


config();

const app = express();


// Middlewares 

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api/books', bookRoutes);


// 404 + Error Handler
app.use(notFound);
app.use(errorHandler);


//Start up 

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

connectDB(MONGODB_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database", error);
}
);