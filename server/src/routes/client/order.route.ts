import express from 'express'
import OrderClientController from '../../controllers/client/order.controller'
import { verifyToken } from '~/middleWares/jwt'
const router = express.Router()

// router.get('/', verifyToken, OrderClientController.GetAllOrder)

router.get('/', verifyToken, OrderClientController.GetAllOrder)

router.post('/', verifyToken, OrderClientController.AddOrder)

router.get('/search', verifyToken, OrderClientController.SearchOrder)

router.get('/:orderid', verifyToken, OrderClientController.GetOrder)

router.put('/:orderid', verifyToken, OrderClientController.UpdateOrder)

router.delete('/:orderid', verifyToken, OrderClientController.DeleteOrder)

export default router
