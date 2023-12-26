import jsonwebtoken from "jsonwebtoken"
import {promisify} from 'util'
import users from "../models/users.js"
import bcrypt from 'bcrypt'
import { allowedNodeEnvironmentFlags } from "process"
export const verifyToken=(req,res,next)=>{
    // console.log(req.cookies)
    const token=req.cookies.jwt 
    if(!token){
        return res.status(401).json({
            status:'fail'
        })
    }
    jsonwebtoken.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.status(403).json({
            status:'fail',
            message:'token not valid'
        })
        // next()
        // res.status(200).json({
        //     message:'u r in'
        // })
        next()
    })
}
export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        console.log("VERIFY USER....")
        if(req.user._id===req.params.id){
            console.log("bhbh",req.user.isAdmin)
            // next()
        }else{
            if(err) return res.status(403).josn({
                status:'fail',
                message:'unauthorized'
            })
        }
    })
}
export const verifyAdmin=async(req,res,next)=>{
try{
    let token=req.cookies.jwt;
    if(!token){
        res.status(401).json({
            status: "fail",
            message: "token undefined",
        });
    }
    const decoded=await promisify(jsonwebtoken.verify)(token,process.env.JWT_SECRET)
    const freshAdmin=await users.findById(decoded.id)
    if(!freshAdmin){
        res.status(401).json({
            status: "fail",
            message: "access denied",
        });
    }
    req.admin=freshAdmin
    next()
}catch(err){
    res.status(401).json({
        status: "fail",
        message: "access denied",
    });
}

}