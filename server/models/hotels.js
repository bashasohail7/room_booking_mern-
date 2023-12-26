import pkg from "mongoose";
import crypto from 'crypto'
// import bcrypt from "bcryptjs/dist/bcrypt.js";
import bcrypt from 'bcrypt'
const { connect, Schema, model } = pkg;
const hotelSchema=new Schema({
    name:{
        type:String,
    //     // required:[true,'need a hotel name']

    },
    type:String,
   city:String,
   address:String,
   distance:String,
   photos:[String],
   desc:String,
   rating:Number,
   rooms:[String]
})

const hotels=model('hotels',hotelSchema)
export default hotels