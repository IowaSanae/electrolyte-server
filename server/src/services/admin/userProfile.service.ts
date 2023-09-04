const db = require('../../models/index')

const UserProfileService = {
    GetProfile: async (userid: any) => {
        try {
            const response = await db.User.findOne({
                where: {
                    userid: userid
                },
                attributes: {
                    exclude: ['password', 'avatar']
                }
            })
            return {
                err: response ? 0 : 1,
                msg: response ? 'Lấy thông tin người dùng thành công.' : 'Lấy thông tin người dùng thất bại.',
                response
            }
        } catch (error) {
            throw new Error('Không thể lấy thông tin người dùng.')
        }
    },

    UpdateProfile: async (userid: any, payload: any) => {
        try {
            const response = await db.User.update(
                {
                    name: payload?.name,
                    email: payload?.email,
                    sex: payload?.sex,
                    address: payload?.address,
                    phone: payload?.phone,
                    birthday: payload?.birthday
                },
                { where: { userid: userid } }
            )
            return {
                err: response ? 0 : 1,
                msg: response ? 'Cập nhật thông tin người dùng thành công.' : 'Cập nhật thông tin người dùng thất bại.',
                response
            }
        } catch (error) {
            throw new Error('Không thể cập nhật thông tin người dùng.')
        }
    }
}

export default UserProfileService