const db = require('../../models/index')

// GET ALL cart
const NotificationService = {
  GetAllNotification: async () => {
    try {
      const response = await db.Notification.findAll({})
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy toàn bộ thông báo thất bại',
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy toàn bộ thông báo.')
    }
  }
}
export default NotificationService
