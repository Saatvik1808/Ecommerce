import express from 'express'
import  colors  from 'colors'
//rest object
import morgan from 'morgan' 
import dotenv from "dotenv"
import connectDB from './config/db.js'
import  authRoute from './routes/authRoute.js'
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors'
dotenv.config();
connectDB(); 
const app=express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//routes
app.use("/api/v1/auth",authRoute)
// rest api
app.get('/',(req,res)=>{
    res.send(
        "<h1>welcome to ecommerce</h1>"
    )
});
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on  ${process.env.DEV_MODE} mode on port  ${PORT}`.bgCyan.white)
})