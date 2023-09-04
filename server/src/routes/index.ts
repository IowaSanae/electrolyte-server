import { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerClientDocument from '../config/swaggerClient.json'
// CLIENT
import IndustryRoute from './client/Industry.route'
import BannerRoute from './client/banner.route'
import NotificationRoute from './client/notification.route'
import PostRoute from './client/post.route'
import ShopRoute from './client/shop.route'
import CartRoute from './client/cart.route'
import UserRoute from './client/user.route'
import CommentClientRoute from './client/comment.route'
import AuthClientRoute from './client/auth.route'
import CategoryTreeRoute from './client/categoryTree.route'
import OrderClientRoute from './client/order.route'
import SearchRoute from '../routes/client/search.route'
import RoomRoute from "../routes/client/room.route"
// ADMIN
import ProductRoute from './admin/product.route'
import CommentRoute from './admin/comment.route'
import OrderRoute from './admin/order.route'
import AuthRoute from './admin/auth.route'
import UserProfileRoute from './admin/userProfile.route'
import ShopAdminRoute from './admin/shop.route'
import RoomAdminRoute from './admin/room.route'
// INSERT
import InsertRoute from './insert/index'

const serveSwaggerClient = swaggerUi.serveFiles(swaggerClientDocument)

const initRoutes = (app: Express) => {
  // CLIENT
  app.use('/api/client/auth', AuthClientRoute)
  app.use('/api/client/banner', BannerRoute)
  app.use('/api/client/cart', CartRoute)
  app.use('/api/client/categoryTree', CategoryTreeRoute)
  app.use('/api/client/comment', CommentClientRoute)
  app.use('/api/client/industry', IndustryRoute)
  app.use('/api/client/notification', NotificationRoute)
  app.use('/api/client/order', OrderClientRoute)
  app.use('/api/client/search', SearchRoute)
  app.use('/api/client/post', PostRoute)
  app.use('/api/client/shop', ShopRoute)
  app.use('/api/client/user', UserRoute)
  app.use('/api/client/room', RoomRoute)

  // ADMIN
  app.use('/api/admin/product', ProductRoute)
  app.use('/api/admin/comment', CommentRoute)
  app.use('/api/admin/order', OrderRoute)
  app.use('/api/admin/auth', AuthRoute)
  app.use('/api/admin/userInfo', UserProfileRoute)
  app.use('/api/admin/shop', ShopAdminRoute)
  app.use('/api/admin/roomAdmin', RoomAdminRoute)

  // INSERT
  // app.use('/api/insert', InsertRoute)

  // Middleware for /api-docs-client
  app.use('/api/client/docs', serveSwaggerClient, swaggerUi.setup(swaggerClientDocument))

  // * If the route does not match any of the above, fall back to this route
  return app.use('/', (req, res) => {
    res.send('server on...')
  })
}

export default initRoutes
