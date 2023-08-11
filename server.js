import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()

// Database Configuration
connectDB();
app.get('/', (req,res) => {
    res.send('<h1>Welcome to the ecommerce app !</h1>')
})

app.use(express.json())
app.use(morgan('dev'))

// PORT Configuration
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is Running on ${process.env.DEV_MODE}  mode on port ${PORT}`.bgCyan.white);
});

// ROUTES
app.use("/api/v1/auth", authRoutes);

