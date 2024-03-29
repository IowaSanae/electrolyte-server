const db = require('../../models/index')
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const AuthService = {
    login: async (email: string, password: string) => {
        try {
            const response = await db.User.findOne({
                where: {
                    email
                },
                raw: true
            })
            const isCorrectPassWord = response && bcrypt.compareSync(password, response.password)
            const token =
                isCorrectPassWord &&
                jwt.sign(
                    {
                        shopid: response.shopid,
                        userid: response.userid,
                        email: response.email,
                        role: response.role
                    },
                    process.env.SECRET_KEY!,
                    { expiresIn: '1d' }
                )
            return {
                err: token ? 0 : 2,
                msg: token ? 'Đăng nhập thành công' : 'Sai tên đăng nhập hoặc mật khẩu',
                response: token ? response : null,
                access_token: token || null
            }
        } catch (error) {
            throw new Error(`Không thể đăng nhập!`)
        }
    }
}

export default AuthService
