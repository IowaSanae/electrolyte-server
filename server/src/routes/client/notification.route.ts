import express from 'express'
import NotificationController from '../../controllers/client/notify.controller'

const router = express.Router()

router.get('/', NotificationController.GetAllNotification)

export default router
