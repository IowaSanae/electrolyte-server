import { formatCategory } from '~/utils/formatCategory'

const db = require('../../models/index')

const CategoriesTreeService = {
  GetAllCategoriesTree: async (level: any) => {
    try {
      const response = await db.HomeCategory.findAll({ where: { level: level } })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy toàn bộ danh mục thất bại.',
        total: response.length,
        response: (response)
      }
    } catch (error) {
      throw new Error('Không thể lấy toàn bộ danh mục.')
    }
  },

  GetAllCategoriesParent: async (catid: any) => {
    try {
      const response = await db.HomeCategory.findAll({ where: { parent_catid: catid } })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy các danh mục sản phẩm thất bại.',
        total: response.length,
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy các danh mục sản phẩm.')
    }
  }
}
export default CategoriesTreeService
