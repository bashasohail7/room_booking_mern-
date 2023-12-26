import express from "express";
import { verifyToken,verifyUser } from "../utils/verifyToken.js";
 const router=express.Router()
//  router.get('/')
 router.get('/check',verifyToken)
 router.get('/checkuser/:id',verifyUser)
export default router