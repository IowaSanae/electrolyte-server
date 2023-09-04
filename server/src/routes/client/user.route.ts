import express, { Router } from 'express'
import UserController from '../../controllers/client/user.controller'
import { verifyToken } from '~/middleWares/jwt'
import fileUploader from '../../config/cloudinary'
require('dotenv').config()

const router: Router = express.Router()

router.get('/current', verifyToken, UserController.GetUserId)

router.put('/', verifyToken, fileUploader.single('avatar'), UserController.UpdateUser)

export default router
