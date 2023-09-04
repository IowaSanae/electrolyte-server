const db = require('../../models/index')
import { Op } from 'sequelize'
import { formatDataResponse } from '~/utils/formatdata'

const PostService = {
  GetPosts: async ({ page, limit }: { page?: number; limit?: number }) => {
    try {
      const queries: any = { raw: true, nest: true }
      const offset = !page || +page <= 1 ? 0 : +page - 1
      const fLimit = +limit! || +process.env.LIMIT!
      queries.offset = offset * fLimit
      queries.limit = fLimit

      const response = await db.Post.findAndCountAll({
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
          "price_before_discount",
          'price_min_before_discount',
          'price_max_before_discount',
          'discount',
          'shop_rating',
          'filename',
          'shop_name',
          'liked',
          'ctime',
          'show_free_shipping',
        ]
      })
      const total = Math.ceil(response.count / fLimit)
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy toàn bộ sản phẩm thất bại.',
        page: page ? +page : 0,
        limit: +limit! ? +limit! : +process.env.LIMIT!,
        totalPage: total,
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy toàn bộ sản phẩm')
    }
  },

  SearchPots: async ({
    page,
    limit,
    order,
    name,
    price,
    ...query
  }: {
    page?: number
    limit?: number
    order?: string
    name?: string
    price?: number[]
    [key: string]: any
  }) => {
    try {
      const queries: any = { raw: true, nest: true }
      const offset = !page || +page <= 1 ? 0 : +page - 1
      const fLimit = +limit! || +process.env.LIMIT!
      queries.offset = offset * fLimit
      queries.limit = fLimit
      if (order) queries.order = [order]
      if (name) query.name = { [Op.substring]: name }
      if (price) query.price = { [Op.between]: price }

      const response = await db.Post.findAndCountAll({
        where: query,
        ...queries
      })

      const total = Math.ceil(response.count / fLimit)
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Tìm sản phẩm thất bại.',
        page: page ? +page : 0,
        limit: +limit! ? +limit! : +process.env.LIMIT!,
        totalPage: total,
        response
      }
    } catch (error) {
      throw new Error('Không thể tìm sản phẩm')
    }
  },

  GetPost: async (itemid: any) => {
    try {
      const response = await db.Post.findOne({
        where: {
          itemid: itemid
        },
        raw: true,
        nest: true,
        include: [
          {
            model: db.TierVariation,
            as: 'tier_variations',
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
          },
          {
            model: db.Industry,
            as: 'categories',
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
          },
          {
            model: db.Video,
            as: 'video',
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
          },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
          },
          {
            model: db.Shop,
            as: 'shop_info',
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
          },

        ]
      })
      return {
        err: formatDataResponse(response) ? 0 : 1,
        msg: formatDataResponse(response) ? 'Thành công' : 'Lấy sản phẩm thất bại.',
        response: formatDataResponse(response)
      }
    } catch (error) {
      throw new Error('Không thể lấy sản phẩm.')
    }
  }
}
export default PostService
