import express from 'express'
import ShopController from '~/controllers/admin/shop.controller'

const router = express.Router()

router.get('/', ShopController.GetShops)

export default router