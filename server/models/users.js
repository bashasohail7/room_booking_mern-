import pkg from "mongoose";
import crypto from 'crypto'
import bcrypt from 'bcrypt'
// import bcrypt from "bcryptjs/dist/bcrypt.js";
const { connect, Schema, model } = pkg;
const userSchema=new Schema({
    username:{
        type:String,
    //     // required:[true,'need a hotel name']

    },
    email:String,
    password:String,
    isAdmin:Boolean
   
},{timestamps:true})
userSchema.pre("save",async function(next){
    console.log('PRESAVE')
    if(!this.isModified("password")) return next()
    else{
        this.password=await bcrypt.hash(this.password,12)
        // this.passwordChangedAt=Date.now()
        next()
    }
})
const users=model('users',userSchema)
export default users