import { Request, Response } from 'express'
import Joi from 'joi'
const cloudinary = require('cloudinary').v2
import { internalServerError, badRequest } from '../../middleWares/handle_errors'
import ProductService from '../../services/admin/product.service'
import { image, name, price } from '../../helpers/validate'

const ProductController = {
    GetAllProduct: async (req: any, res: Response) => {
        try {
            const { shopid } = req.shop
            const query = req.query
            ProductService.GetAllProduct({ shopid, ...query }).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            return internalServerError(res)
        }
    },
    AddProduct: async (req: any, res: Response) => {
        try {
            const { shopid } = req.shop
            const fileData = req.file
            const payload = req.body

            const { error } = Joi.object({ image, name, price }).validate({
                name: req.body.name,
                price: req.body.price,
                image: fileData.path
            })
            if (error) {
                if (fileData) cloudinary.uploader.destroy(fileData.filename)
                return badRequest(error.details[0].message, res)
            }

            ProductService.AddProduct(shopid, payload, fileData).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            internalServerError(res)
        }
    },
    GetProductId: async (req: Request, res: Response) => {
        try {
            const { itemid } = req.params
            ProductService.GetProductId(itemid).then((response: any) => {
                return res.status(200).json(response)
            })
        } catch (error) {
            internalServerError(res)
        }
    },

    UpdateProduct: async (req: Request, res: Response) => {
        try {
            const { itemid } = req.params
            const fileData = req.file
            const payload = req.body
            ProductService.UpdateProduct(itemid, fileData, payload).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            internalServerError(res)
        }
    },

    DeleteProduct: async (req: Request, res: Response) => {
        try {
            const { itemid } = req.params
            const { fileName } = req.query
            ProductService.DeleteProduct(itemid, fileName).then((response: any) => {
                res.status(200).json(response)
            })
        } catch (error) {
            internalServerError(res)
        }
    }
}

export default ProductController