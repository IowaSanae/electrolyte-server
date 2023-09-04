const db = require('../../models/index')

const ShopService = {
  GetItems: async (shopid: any) => {
    try {
      const response = await db.Post.findAll({
        where: { shopid: shopid },
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
          'show_free_shipping'
        ]
      })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy sản phẩm từ cửa hàng thất bại.',
        total: response.length,
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy sản phẩm từ cửa hàng.')
    }
  },

  GetShopID: async (shopid: any) => {
    try {
      const response = await db.Shop.findOne({ where: { shopid: shopid } })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy id của cửa hàng thất bại.',
        response
      }
    } catch (error) {
      throw new Error('Không thể lấy id của cửa hàng.')
    }
  }
}

export default ShopService
