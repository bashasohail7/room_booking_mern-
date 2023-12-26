import users from "../models/users.js"
import bcrypt from 'bcrypt'
import jsonwebtoken from "jsonwebtoken"

const signToken=(id)=>{
    return jsonwebtoken.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES,
    })
}
const createSendToken=(user,statusCode,res)=>{
    const token =signToken(user._id)
    res.cookie('jwt',token,{
        maxAge:90000,
        httpOnly:true
    })
    user.password=undefined
    return res.status(statusCode).json({
        status:'success',
        token,
        data:{user}
    })
}



export const register=async(req,res,next)=>{
    try{
        console.log("BODY",req.body)
        const newUser=await users.create(req.body)
        // console.log("NEWHOTEL",newHotel)
        res.status(201).json({
            status:'success',
            message:'a new user has been created'
        })
    }catch(err){
res.status(400).json({
    status:'fail',
    message:err.message

})
console.log(err)
    }
}

export const login=async(req,res,next)=>{
    // console.log(process.env)
    const{email,password}=req.body
  //! ====== CHECK IF EMAIL AND PASSWORD EXIST
if(!email||!password){

}
const user=await users.findOne({email})

if(user&& await bcrypt.compare(password,user.password)){
    createSendToken(user,200,res)
    console.log(res.cookies)
    // res.status(200).json({
    //     status:'success',
    //     message:'login !!!',
    //     user
    // })
}else{
    res.status(404).json({
        status:'Fail',
        message:'wrong credentials !!!'
    })
}
next()
}