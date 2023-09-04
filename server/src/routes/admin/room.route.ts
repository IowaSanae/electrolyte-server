import express from 'express'
import { verifyToken, isShopAdmin } from '../../middleWares/jwt'
import RoomController from '~/controllers/admin/room.controller'

const router = express.Router()

router.get('/', verifyToken, isShopAdmin, RoomController.GetRooms)

export default router