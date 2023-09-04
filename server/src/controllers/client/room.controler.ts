import { Response } from 'express'
import RoomService from '../../services/client/room.service'
import { internalServerError } from '../../middleWares/handle_errors'

const RoomController = {
    GetRooms: async (req: any, res: Response) => {
        const { userid } = req.user
        try {
            const response = await RoomService.GetRooms(userid)
            return res.status(200).json(response)
        } catch (error) {
            return internalServerError(res)
        }
    },
    GetRoom: async (req: any, res: Response) => {
        const { userid } = req.user
        const { roomid } = req.params
        try {
            const response = await RoomService.GetRoom(roomid)
            return res.status(200).json(response)
        } catch (error) {
            return internalServerError(res)
        }
    },

    AddRoom: async (req: any, res: Response) => {
        const payload = req.body
        const { userid } = req.user
        try {
            const response = await RoomService.AddRoom(payload, userid)
            return res.status(200).json(response)
        } catch (error) {
            return internalServerError(res)
        }
    },

    DeleteRoom: async (req: any, res: Response) => {
        const { roomid } = req.params
        const { userid } = req.user
        try {
            const response = await RoomService.DeleteRoom(roomid, userid)
            return res.status(200).json(response)
        } catch (error) {
            return internalServerError(res)
        }
    }
}

export default RoomController