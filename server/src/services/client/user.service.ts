const db = require('../../models/index')
const cloudinary = require('cloudinary').v2

const UserService = {
  GetUserId: async (userid: any) => {
    try {
      const response = await db.User.findOne({
        where: { userid: userid },
        attributes: {
          exclude: ['id', 'updatedAt', 'password']
        }
      })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Không tìm thấy người dùng.',
        response
      }
    } catch (error) {
      throw new Error('Không tìm thấy người dùng.')
    }
  },

  UpdateUser: async (userid: any, payload: any) => {
    try {
      const response = await db.User.update(
        {
          sex: +payload?.sex,
          email: payload?.email,
          name: payload?.name,
          address: payload?.address,
          phone: +payload?.phone,
          birthday: payload?.birthday,
          avatar: payload.avatar
        },
        { where: { userid: userid } }
      )

      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Không thể cập nhật người dùng.'
      }
    } catch (error) {
      throw new Error('Không thể cập nhật người dùng.')
    }
  }
}

export default UserService
