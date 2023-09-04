const db = require('../../models/index')

const BannerService = {
  GetAllBanner: async () => {
    try {
      const response = await db.Banner.findAll()
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy các banner thất bại.',
        total: response.length,
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy banner.')
    }
  }
}
export default BannerService
