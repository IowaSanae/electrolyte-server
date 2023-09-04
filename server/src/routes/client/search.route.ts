import express from 'express'
import SearchController from '../../controllers/client/search.controller'
import { verifyToken } from '~/middleWares/jwt'

const router = express.Router()

router.get('/', verifyToken, SearchController.GetAllSearch)

router.post('/', verifyToken, SearchController.AddSearch)

export default router
