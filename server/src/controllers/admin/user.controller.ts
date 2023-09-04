import { Request, Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
import UserProfileService from '../../services/admin/userProfile.service'

const UserProfileController = {
    GetProfile: async (req: any, res: Response) => {
        try {
            const { userid } = req.shop
            UserProfileService.GetProfile(userid).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            return internalServerError(res)
        }
    },

    UpdateProfile: async (req: any, res: Response) => {
        try {
            const payload = req.body
            const { userid } = req.shop
            UserProfileService.UpdateProfile(userid, payload).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            internalServerError(res)
        }
    }
}

export default UserProfileController