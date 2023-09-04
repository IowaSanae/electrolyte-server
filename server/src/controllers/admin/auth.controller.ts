import { Request, Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
import AuthService from '../../services/admin/auth.service'

const AuthController = {
    Login: (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                return res.status(200).json({
                    err: 1,
                    mess: 'Thiếu email hoặc mật khẩu'
                })
            }
            AuthService.login(email, password).then((response) => {
                res.status(200).json(response)
            })
        } catch (error) {
            return internalServerError(res)
        }
    }
}

export default AuthController
