import express from "express";
import { createRoom,getRoom,getRooms,update } from "../controllers/rooms.js";
 export const router=express.Router()
 router.get('/',getRooms)
 router.get('/:id',getRoom)
 router.post('/create/:hotelId',createRoom)
 router.patch('/update/:roomId',update)
 export default router