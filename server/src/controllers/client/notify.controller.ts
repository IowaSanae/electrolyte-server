import NotificationService from '../../services/client/notify.service'
import { internalServerError } from '../../middleWares/handle_errors'
import { Request, Response } from 'express'

const NotificationController = {
  GetAllNotification: async (req: Request, res: Response) => {
    try {
      const response = await NotificationService.GetAllNotification()
      return res.status(200).json(response)
    } catch (error) {
      return internalServerError(res)
    }
  }
}

export default NotificationController
