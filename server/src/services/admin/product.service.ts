const db = require('../../models/index')
const cloudinary = require('cloudinary').v2
import { generateItemid } from '../../utils/gennerateNumber'

const ProductService = {
    GetAllProduct: async ({ page, limit, shopid }: { page?: number; limit?: number; shopid: any }) => {
        try {
            const queries: any = { raw: true, nest: true }
            const offset = !page || +page <= 1 ? 0 : +page - 1
            const fLimit = +limit! || +process.env.LIMIT!
            queries.offset = offset * fLimit
            queries.limit = fLimit

            const response = await db.Post.findAndCountAll({
                where: { shopid: shopid },
                ...queries,
                order: [['createdAt', 'DESC']], // Sắp xếp theo createdAt giảm dần
                attributes: [
                    'itemid',
                    'shopid',
                    'catid',
                    'name',
                    'image',
                    'historical_sold',
                    'price',
                    'price_min',
                    'stock',
                    'price_max',
                    'price_min_before_discount',
                    'price_max_before_discount',
                    'discount',
                    'shop_rating',
                    'filename',
                    'shop_name',
                    'liked',
                    'ctime',
                    'show_free_shipping'
                ]
            })
            const total = Math.ceil(response.count / fLimit)
            return {
                err: response ? 0 : 1,
                msg: response ? 'Lấy toàn bộ sản phẩm thành công' : 'Lấy toàn bộ sản phẩm thất bại',
                page: page ? +page : 0,
                limit: +limit! ? +limit! : +process.env.LIMIT!,
                totalPage: total,
                response
            }
        } catch (error) {
            throw new Error('Không thể lấy sản phẩm')
        }
    },

    AddProduct: async (shopid: any, payload: any, fileData: any) => {
        try {
            const itemid = generateItemid()
            const response = await db.Post.create({
                itemid,
                shopid: shopid,
                name: payload?.name,
                image: fileData?.path,
                stock: +payload?.stock,
                filename: fileData?.filename,
                historical_sold: +payload?.historical_sold,
                price: +payload?.price,
                price_min: +payload?.price_min,
                price_max: +payload?.price_max,
                price_min_before_discount: +payload?.price_min_before_discount,
                price_max_before_discount: +payload?.price_max_before_discount,
                discount: payload?.discount === '' ? null : payload.discount,
                shop_rating: 5,
                catid: +payload?.catid,
                shop_name: payload?.shop_name
                // liked: payload?.liked,
                // ctime: payload?.ctime,
                // show_free_shipping: payload?.show_free_shipping,
            })
            return {
                err: response ? 0 : 1,
                msg: response ? 'Thêm sản phẩm thành công' : 'Thêm sản phẩm thất bại.',
                response
            }
            if (fileData && !response) cloudinary.uploader.destroy(fileData.filename)
        } catch (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename)
            throw new Error(`Không thể thêm sản phẩm.`)
        }
    },

    GetProductId: async (itemid: any) => {
        try {
            const tier_variations = await db.TierVariation.findAll({
                where: {
                    itemid: itemid
                },
                attributes: { exclude: ['id', 'itemid', 'createdAt', 'updatedAt'] }
            })
            const response = await db.Post.findOne({
                where: {
                    itemid: itemid
                },
                raw: true,
                nest: true,
                include: [
                    {
                        model: db.Category,
                        as: 'categories',
                        attributes: {
                            exclude: ['id', 'itemid', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Video,
                        as: 'video',
                        attributes: {
                            exclude: ['id', 'itemid', 'createdAt', 'updatedAt']
                        }
                    },

                    {
                        model: db.Attribute,
                        as: 'attributes',
                        attributes: {
                            exclude: ['id', 'itemid', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Shop,
                        as: 'shop_info',
                        attributes: {
                            exclude: ['id', 'shopid', 'createdAt', 'updatedAt']
                        }
                    }
                ]
            })
            if (response.video.video_id === null) {
                delete response['video']
            }
            if (response.attributes.name === null) {
                delete response['attributes']
            }
            return {
                err: response ? 0 : 1,
                msg: response ? 'Lấy sản phẩm thành công' : 'Lấy sản phẩm thất bại',
                response: { ...response, tier_variations: tier_variations }
            }
        } catch (error) {
            throw new Error(`Không thể lấy sản phẩm.`)
        }
    },

    UpdateProduct: async (itemid: any, fileData: any, payload: any) => {
        try {
            if (fileData) {
                payload.image = fileData.path
            }
            const response = await db.Post.update(
                {
                    name: payload?.name,
                    image: payload?.image,
                    historical_sold: payload?.historical_sold,
                    price: payload?.price,
                    price_min: payload?.price_min,
                    stock: payload?.stock,
                    price_max: payload?.price_max,
                    price_min_before_discount: payload?.price_min_before_discount,
                    price_max_before_discount: payload?.price_max_before_discount,
                    discount: payload?.discount,
                    shop_rating: payload?.shop_rating
                },
                {
                    where: { itemid: itemid }
                }
            )
            return {
                err: response ? 0 : 1,
                msg: response ? 'Cập nhật sản phẩm thành công' : 'Cập nhật sản phẩm thất bại',
                response
            }
            if (fileData && !response) cloudinary.uploader.destroy(fileData.filename)
        } catch (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename)
            throw new Error(`Không thể cập nhật sản phẩm.`)
        }
    },

    DeleteProduct: async (itemid: any, fileName: any) => {
        try {
            const response = await db.Post.destroy({
                where: { itemid }
            })
            cloudinary.api.delete_resources(fileName)

            return {
                err: response ? 0 : 1,
                msg: response ? 'Xóa sản phẩm thành công' : `Xóa sản phẩm ${itemid} thất bại`,
                response
            }
        } catch (error) {
            throw new Error(`Không thể xóa sản phẩm ${itemid}.`)
        }
    }
}
export default ProductService