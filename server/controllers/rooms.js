// import rooms from "../models/rooms.js";
import rooms from "../models/rooms.js";
import hotels from "../models/hotels.js";
export const getRooms=async(req,res,next)=>{
    try {
        const allRooms=await rooms.find()
        res.status(200).json({
            status:'success',
            result:allRooms.length,
            data:allRooms
        })
    } catch (error) {
        
    }
}
export const getRoom=async(req,res,next)=>{
    try {
        const room=await rooms.findById(req.params.id)
        res.status(200).json({
            status:"success",
            room
        })
    } catch (error) {
        
    }
}
export const createRoom=async(req,res,next)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new rooms(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await hotels.findByIdAndUpdate(hotelId, 
            {$push:{rooms:savedRoom._id}}
        );
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }

}
export const update=async(req,res,next)=>{
    try{
const roomById=await rooms.findByIdAndUpdate(req.params.roomId,req.body,{
    new:true,
    runValidators:true,
})
return res.status(200).json({
    status:'success',
    roomById
})
    }catch(err){
res.status(404).json({
    status:'fail',
    message:err
})
    }

}

