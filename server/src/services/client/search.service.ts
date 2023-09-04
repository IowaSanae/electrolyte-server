const db = require('../../models/index')

const SearchService = {
  GetAllSearch: async (userid: string) => {
    try {
      const response = await db.Search.findAll({
        where: { userid: userid },
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt']
        },
        order: [['createdAt', 'DESC']], // Order by createdAt in descending order (newest first)
        limit: 10 // Limit the result to 10 items
      })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy kết quả tìm kiếm thất bại.',
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy kết quả tìm kiếm.')
    }
  },

  AddSearch: async (payload: any, userid: string) => {
    try {
      const response = await db.Search.create({
        userid: userid,
        text: payload.text
      })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Thêm tìm kiếm thất bại',
        response
      }
    } catch (error) {
      throw new Error('Không thể thêm tìm kiếm.')
    }
  }
}

export default SearchService
