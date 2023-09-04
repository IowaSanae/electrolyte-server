import express from 'express'
import IndustryController from '../../controllers/client/industry.controller'

const router = express.Router()

router.get('/', IndustryController.GetAll)

router.get('/category', IndustryController.GetAllCategory)

export default router
