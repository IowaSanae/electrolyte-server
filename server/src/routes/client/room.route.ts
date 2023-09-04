import express from 'express'
import RoomController from '~/controllers/client/room.controler'

import { verifyToken } from '~/middleWares/jwt'

const router = express.Router()

router.get('/', verifyToken, RoomController.GetRooms)

router.get('/:roomid', verifyToken, RoomController.GetRoom)

router.post('/', verifyToken, RoomController.AddRoom)

router.delete('/:roomid', verifyToken, RoomController.DeleteRoom)

export default router