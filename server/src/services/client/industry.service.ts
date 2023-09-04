import dotenv from 'dotenv'
dotenv.config()
const db = require('../../models/index')

const GetAllIndustryService = {
  GetAllIndustry: async () => {
    try {
      const response = await db.Industry.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'images'] }
      })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy các ngành hàng thất bại.',
        total: response.length,
        response
      }
    } catch (error) {
      console.log(error)
    }
  },

  GetAllIndustryWithCategory: async ({ page, limit, category_name }: { page: number; limit: number; category_name: any }) => {
    try {
      const response = await db.Industry.findAll({
        where: { category_name: category_name }
      })
      const catid = response[0].catid
      const queries: any = {}
      const offset = page && page > 0 ? (page - 1) * limit : 0
      const fLimit = limit || process.env.LIMIT || 10
      queries.catid = catid
      const response2 = await db.Post.findAndCountAll({
        where: { catid: queries.catid },
        offset: offset, // Add the offset and limit here
        limit: fLimit
      })
      const total = Math.ceil(response2.count / +fLimit)
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Không thể lấy các ngành hàng',
        page: page ? +page : 0,
        limit: limit ? +limit : process.env.LIMIT || 10,
        totalPage: total,
        response: response2
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export default GetAllIndustryService
