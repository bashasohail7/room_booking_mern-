import express from "express"
import hotels from "../models/hotels.js"
import { APIFeatures } from "../utils/apiFeatures.js"
import { createError } from "../utils/error.js"
const router=express.Router()
export const getAllHotels=async(req,res,next)=>{
    
   try{
    //    const features=new APIFeatures(hotels.find(),req.query)
    //    const hoteldata=await features.query;
       const allHotels=await hotels.find()
       return res.status(200).json({
           status:'success',
           results:allHotels.length,
           allHotels
       })
   } catch(err){
        return res.status(404).json({
            status:'fail',
            message:err
        })
   }
}
export const countByCity=async(req,res,next)=>{
    const cities=req.query.cities.split(',')
    try{
        const list=await Promise.all(cities.map(city=>{
            return hotels.countDocuments({city:city})
        }))
        res.status(200).json(list)
   
    } catch(err){
         return res.status(404).json({
             status:'fail',
             message:err
         })
    }
 }

 export const countByType=async(req,res,next)=>{
     try{
        const hotelCount=await hotels.countDocuments({type:"hotel"})
        const apartmentCount=await hotels.countDocuments({type:"apartment"})
        const resortCount=await hotels.countDocuments({type:"resort"})
        const villaCount=await hotels.countDocuments({type:"villa"})
        const cabinCount=await hotels.countDocuments({type:"cabin"})
        
        res.status(200).json([
            {type:'hotel',count:hotelCount},
            {type:'apartment',count:apartmentCount },
            {type:'resort',count:resortCount},
            {type:'villa',count:villaCount},
            {type:'cabin',count:cabinCount},
        ])
   
    } catch(err){
         return res.status(404).json({
             status:'fail',
             message:err
         })
    }
 }
export const create=async(req,res,next)=>{
    try{
        console.log("BODY",req.body)
        const newHotel=await hotels.create(req.body)
        // console.log("NEWHOTEL",newHotel)
        res.status(201).json({
            status:'success',
            data:{newHotel}
        })
    }catch(err){
res.status(400).json({
    status:'fail',
    message:err.message

})
console.log(err)
    }
}
export const update=async(req,res,next)=>{
    try{
const hotelById=await hotels.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
})
return res.status(200).json({
    status:'success',
    hotelById
})
    }catch(err){
res.status(404).json({
    status:'fail',
    message:err
})
    }

}
//*DELETE
export const deleteHotel=async(req,res,next)=>{
    try{
const hotelById=await hotels.findByIdAndDelete(req.params.id)
return res.status(200).json({
    status:'success',
    message:'Hotel has been deleted'
})
    }catch(err){
res.status(404).json({
    status:'fail',
    message:err
})
    }

}
