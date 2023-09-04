import express from 'express'
import PostController from '../../controllers/client/post.controller'

const router = express.Router()

router.get('/', PostController.GetPosts)

router.get('/search', PostController.SearchPosts)

router.get('/:itemid', PostController.GetPost)

export default router
