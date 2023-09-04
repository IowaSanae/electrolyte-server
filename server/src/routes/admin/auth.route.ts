import express from 'express'
import AuthController from '../../controllers/admin/auth.controller'

const router = express.Router()

router.post('/login', AuthController.Login)

export default router
