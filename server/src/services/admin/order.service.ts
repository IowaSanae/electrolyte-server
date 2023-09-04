import { Request, Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
const db = require('../../models/index')

const OrderService = {
    GetAllOrder: async (req: Request, res: Response) => {
        try {
            return []
        } catch (error) {
            throw new Error(`Không thể lấy các đơn đặt hàng`)
        }
    },

    GetOrderId: async (req: Request, res: Response) => {
        {
            try {
                return null
            } catch (error) {
                throw new Error(`Không thể lấy đơn đặt hàng`)
            }
        }
    },

    AddOrder: async (req: Request, res: Response) => {
        {
            try {
                return null
            } catch (error) {
                throw new Error(`Không thể thêm đơn đặt hàng`)
            }
        }
    },

    UpdateOrder: async (req: Request, res: Response) => {
        {
            try {
                return null
            } catch (error) {
                throw new Error(`Không thể cập nhật đơn đặt hàng`)
            }
        }
    },

    DeleteOrder: async (req: Request, res: Response) => {
        {
            try {
                return true
            } catch (error) {
                throw new Error(`Không thể xóa đơn đặt hàng`)
            }
        }
    }
}

export default OrderService