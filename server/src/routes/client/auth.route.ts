const express = require('express')
const router = express.Router()

import AuthClientController from '../../controllers/client/auth.controller'
import sendEmail from '../../middleWares/sendEmail'
import passport from 'passport'
import { badRequest } from '../../middleWares/handle_errors'

require('dotenv').config()

router.post('/register', AuthClientController.Register, sendEmail)

router.post('/login', AuthClientController.Login)

router.post('/forgotPassword', AuthClientController.forgotPassword)

router.put('/resetPassword', AuthClientController.resetPassword)

router.post('/refreshToken', AuthClientController.refreshAccessToken)

router.get('/logout', AuthClientController.logout)

export default router
