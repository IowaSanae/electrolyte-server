import express from 'express'
import CategoriesTreeController from '../../controllers/client/categoryTree.controller'

const router = express.Router()

router.get('/:level', CategoriesTreeController.GetAllCategoriesTree)
router.get('/parent/:catid', CategoriesTreeController.GetAllCategoriesParent)

export default router
