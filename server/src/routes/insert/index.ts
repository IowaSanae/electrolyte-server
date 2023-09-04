import express from 'express'
import { Router } from 'express'
import InsertControllers from '../../controllers/insert/index'
require('dotenv').config()

const router: Router = express.Router()

router.post('/app', InsertControllers.App)

router.post('/comment/:start/:end', InsertControllers.Comment)

router.post('/post', InsertControllers.Post)

router.post('/shop', InsertControllers.Shop)

router.post('/industry', InsertControllers.Industries)

export default router
