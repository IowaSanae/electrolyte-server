import { Request, Response } from 'express'
import BannerService from '../../services/client/banner.service'
import { internalServerError } from '../../middleWares/handle_errors'

const BannerController = {
  GetAllBanner: async (req: Request, res: Response) => {
    try {
      const response = await BannerService.GetAllBanner()
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  }
}

export default BannerController
