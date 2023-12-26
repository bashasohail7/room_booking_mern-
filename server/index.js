import express from "express";
import dotenv from 'dotenv'
import pkg from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRouter from './Routes/auth.js'
import hotelRouter from './Routes/hotels.js'
import userRouter from './Routes/users.js'
import roomRouter from './Routes/rooms.js'
const {connect,Schema,model}=pkg
const app=express()
app.use(cors())
dotenv.config({path:'./config.env'})

app.use(express.json())
app.use(cookieParser())

// const connecting=async()=>{
//     try{
// await connect(process.env.DATABASE_LOCAL)
// console.log("connect to local Database")
//     }catch(err){
//         throw err
//     }
// }
connect('mongodb://localhost:27017/bookingRoom',{
    // mongoose.connect(DB,{
useNewUrlParser:true,
// useCreateIndex:true,
// useFindAndModify:false
}).then(connection=>{
    console.log('DB CONNECTION SUCCESFFUL')
    // console.log(process.env)
})
// app.get('/',(req,res)=>{
//     res.status(200).json({
// status:'success',
// message:'Hello'
//     })
// })
app.use('/api/v1/auth/',authRouter)
app.use('/api/v1/user/',userRouter)
app.use('/api/v1/hotels',hotelRouter)
app.use('/api/v1/rooms',roomRouter)
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message||"Hello there's an ERROR"
    return res.status(errorStatus).json({
        success:'fail',
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})
app.listen(8800,()=>{
    console.log("connected to backend on port",8800)
})