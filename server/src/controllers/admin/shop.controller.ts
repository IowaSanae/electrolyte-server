import { Response } from 'express'
import { internalServerError } from '../../middleWares/handle_errors'
import ShopService from '~/services/admin/shop.service'

const ShopController = {
    GetShops: async (req: any, res: Response) => {
        try {
            const query = req.query
            ShopService.GetShops({ ...query }).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            return internalServerError(res)
        }
    }
}

export default ShopController