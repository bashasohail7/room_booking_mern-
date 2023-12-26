import express from "express";
import { deleteHotel,create,getAllHotels,update, countByCity, countByType } from "../controllers/hotels.js";
  const router=express.Router()
router.get('/',getAllHotels)
router.get('/countByCity',countByCity)
router.get('/countByType',countByType)
// router.get('/',getAllHotels)

router.route('/update/:id')
      .patch(update)
      .delete(deleteHotel)

 router.post('/create',create)
 export default router