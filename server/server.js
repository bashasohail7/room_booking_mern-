import pkg from 'mongoose'
const {connect,Schema,model}=pkg
// import 
import dotenv from 'dotenv'
// import app from './index.js'
import app from './index.js'
// dotenv.config({path:'./config.env'})
app.get('env')
connect('mongodb://localhost:27017/bookingRoom',{
    // mongoose.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false
}).then(connection=>{
    console.log('DB CONNECTION SUCCESFFUL')
    // console.log(process.env)
})
const port=8800
// let server=app.listen(port,()=>console.log('app listening on port: ',port))
app.listen(port,()=>console.log('app listening on port: ',port))
// const wss = new SocketServer({ server });