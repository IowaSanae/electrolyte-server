import express from 'express'
import CommentController from '../../controllers/client/comment.controller'
import { verifyToken } from '~/middleWares/jwt'
import fileUploader from '../../config/cloudinary'
const router = express.Router()

router.get('', CommentController.GetAllComment)

router.post('', verifyToken, fileUploader.array('images', 5), CommentController.CreateComment)

export default router
