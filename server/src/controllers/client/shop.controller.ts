import { Request, Response } from 'express'
import ShopService from '../../services/client/shop.service'
import { internalServerError } from '../../middleWares/handle_errors'

const ShopController = {
  GetItems: async (req: Request, res: Response) => {
    const { shopid } = req.params
    try {
      const response = await ShopService.GetItems(shopid)
      return res.status(200).json(response)
    } catch (error) {
      internalServerError(res)
    }
  },

  GetShopID: async (req: Request, res: Response) => {
    const { shopid } = req.params
    try {
      const response = await ShopService.GetShopID(shopid)
      return res.status(200).json(response)
    } catch (error) {
      internalServerError(res)
    }
  }
}

export default ShopController
