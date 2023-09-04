import { Response } from 'express'
import RoomService from '../../services/admin/room.service'
import { internalServerError } from '../../middleWares/handle_errors'

const RoomController = {
    GetRooms: async (req: any, res: Response) => {
        const { shopid } = req.shop
        try {
            const response = await RoomService.GetRooms(shopid)
            return res.status(200).json(response)
        } catch (error) {
            return internalServerError(res)
        }
    }
}

export default RoomController