const db = require('../../models/index')
import { generateRoomid } from '../../utils/gennerateNumber'

const RoomService = {
    GetRooms: async (userid: any) => {
        try {
            const ListRoom = await db.Room.findAll({
                where: { userid: userid },
                attributes: {
                    exclude: ['id', 'userid']
                }
            })
            const ListRoomResponse: any[] = []
            await Promise.all(
                ListRoom.map(async (item: any) => {
                    const shop = await db.Shop.findOne({
                        where: { shopid: item.shopid },
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt']
                        }
                    })
                    const newItem = {
                        ...item.dataValues,
                        shop_info: shop
                    }
                    ListRoomResponse.push(newItem)
                })
            )
            return {
                err: ListRoomResponse.length > 0 ? 0 : 1,
                msg: ListRoomResponse.length > 0 ? 'Thành công' : 'Không tìm thấy phòng chat nào',
                total: ListRoomResponse.length > 0 ? ListRoomResponse.length : 0,
                response: ListRoomResponse
            }
        } catch (error) {
            throw new Error('Không thể lấy toàn bộ phòng chat.')
        }
    },

    GetRoom: async (roomid: any) => {
        try {
            const roomResponse = await db.Room.findOne({
                where: { roomid: roomid },
                attributes: {
                    exclude: ['id', 'userid']
                }
            })
            const shop = await db.Shop.findOne({
                where: { shopid: roomResponse.shopid },
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt']
                }
            })
            const response = {
                ...roomResponse.dataValues,
                shop_info: shop
            }
            return {
                err: response ? 0 : 1,
                msg: response ? 'Thành công' : 'Lấy phòng chat thất bại.',
                response: response
            }
        } catch (error) {
            throw new Error('Không thể lấy phòng chat.')
        }
    },

    AddRoom: async (payload: any, userid: any) => {
        try {
            const response = await db.Room.create({
                roomid: generateRoomid(+userid, payload.shopid),
                userid: userid,
                shopid: payload.shopid
            })
            return {
                err: response ? 0 : 1,
                msg: response ? 'Thành công' : 'Thêm phòng chat thất bại.',
                response: response
            }
        } catch (error) {
            throw new Error('Không thể thêm phòng chat.')
        }
    },

    DeleteRoom: async (roomid: any, userid: any) => {
        try {
            const response = await db.Room.destroy({ where: { roomid: roomid, userid: userid } })
            return {
                err: response ? 0 : 1,
                msg: response ? 'Thành công' : 'Xóa phòng chat thất bại.',
                response
            }
        } catch (error) {
            throw new Error('Không thể xóa phòng chat.')
        }
    }
}

export default RoomService