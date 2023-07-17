import express from 'express'
import  colors  from 'colors'
//rest object
import morgan from 'morgan' 
import dotenv from "dotenv"
import connectDB from './config/db.js'
import  authRoute from './routes/authRoute.js'
dotenv.config();
connectDB(); 
const app=express()
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use("/api/v1/auth",authRoute)
// rest api
app.get('/',(req,res)=>{
    res.send(
        "<h1>welcome to ecommerce</h1>"
    )
})

//port
const PORT=process.env.PORT || 8080 

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})