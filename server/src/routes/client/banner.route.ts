import GetAllBanner from '../../controllers/client/banner.controller'
import express from 'express'
const router = express.Router()
router.get('/', GetAllBanner.GetAllBanner)

export default router
