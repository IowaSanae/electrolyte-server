import { Request, Response } from 'express'
import CartService from '../../services/client/cart.service'
import { internalServerError } from '../../middleWares/handle_errors'

const CartController = {
  GetAllCart: async (req: any, res: Response) => {
    try {
      const { userid } = req.user
      const response = await CartService.GetAllCart(userid)
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  },

  AddCart: async (req: any, res: Response) => {
    const payload = req.body
    const { userid } = req.user
    try {
      const response = await CartService.AddCart(payload, userid)
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  },

  UpdateCart: async (req: Request, res: Response) => {
    const payload = req.body
    const { cartid } = req.params
    try {
      const response = await CartService.UpdateCart(cartid, payload)
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  },

  DeleteCart: async (req: Request, res: Response) => {
    const { cartid } = req.params
    try {
      const response = await CartService.DeleteCart(cartid)
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  }
}

export default CartController
