import pkg from "mongoose";
import crypto from 'crypto'
import bcrypt from 'bcrypt'
// import bcrypt from "bcryptjs/dist/bcrypt.js";
const { connect, Schema, model } = pkg;
const roomSchema=new Schema({
    title:String,
    price:Number,
    desc:String,
    maxPeople:Number,
    roomNumbers:[{number:Number,unavailableDates:[Date]}]
   
},{timestamps:true})

const rooms=model('rooms',roomSchema)
export default rooms