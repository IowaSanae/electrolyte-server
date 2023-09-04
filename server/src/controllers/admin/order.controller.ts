import { Request, Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
import OrderService from '../../services/admin/order.service'

const OrderController = {
    GetAllOrder: async (req: Request, res: Response) => {
        try {
            const response = await OrderService.GetAllOrder
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    GetOrderId: async (req: Request, res: Response) => {
        try {
            const response = await OrderService.GetOrderId
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    AddOrder: async (req: Request, res: Response) => {
        try {
            const response = await OrderService.AddOrder
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    UpdateOrder: async (req: Request, res: Response) => {
        try {
            const response = await OrderService.UpdateOrder
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    },

    DeleteOrder: async (req: Request, res: Response) => {
        try {
            const response = await OrderService.DeleteOrder
            return res.status(200).json(response)
        } catch (error) {
            internalServerError(res)
        }
    }
}

export default OrderController