const db = require('../../models/index')
import { generateCartid } from '../../utils/gennerateNumber'

const CartService = {
  GetAllCart: async (userid: any) => {
    try {
      const response = await db.Cart.findAll({
        where: { userid: userid },
        raw: true,
        nest: true,
        include: [
          { model: db.Post, as: 'overview', attributes: { exclude: ['id', 'createdAt', 'updatedAt'] } },
          {
            model: db.TierVariation,
            as: 'cart_tier_variations',
            attributes: {
              exclude: ['id', 'images', 'createdAt', 'updatedAt']
            }
          }
        ],
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
      })
      let shopIdArrays = response.reduce((acc: any, curr: any) => {
        const shopId = curr.shopid
        if (acc[shopId]) {
          acc[shopId].push(curr)
        } else {
          acc[shopId] = [curr]
        }
        return acc
      }, {})

      const listNumberCart = []
      shopIdArrays = Object.values(shopIdArrays)
      shopIdArrays.map((ele: any) => ele.map((item: any, index: any) => listNumberCart.push(index)))
      const total_cart = listNumberCart.length
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Lấy thông tin giỏ hàng thất bại.',
        total_cart,
        response: shopIdArrays
      }
    } catch (error) {
      throw new Error('Không thể lấy thông tin giỏ hàng.')
    }
  },

  AddCart: async (payload: any, userid: any) => {
    try {
      const condition = {
        userid: userid,
        itemid: payload.itemid,
        option: payload.option
      }
      const response = await db.Cart.findOne({ where: condition })

      if (response) {
        const result = await db.Cart.update(
          {
            userid: userid,
            itemid: payload.itemid,
            shopid: payload.shopid,
            option: payload.option,
            amount: response.dataValues.amount + 1
          },
          {
            where: condition
          }
        )
        return {
          err: result ? 0 : 1,
          msg: result ? 'Thành công' : 'Thêm giỏ hàng thất bại.',
          response: result ? result : null
        }
      } else {
        const result = await db.Cart.create({
          cartid: generateCartid(),
          userid: userid,
          itemid: payload.itemid,
          shopid: payload.shopid,
          option: payload.option,
          amount: payload.amount
        })

        return {
          err: result ? 0 : 1,
          msg: result ? 'Thành công' : 'Thêm giỏ hàng thất bại.',
          response: result ? result : null
        }
      }
    } catch (error) {
      throw new Error('Failed to add cart.')
    }
  },

  UpdateCart: async (cartid: any, payload: any) => {
    try {
      const response = await db.Cart.update({ amount: payload?.amount, option: payload?.option }, { where: { cartid: cartid } })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Cập nhật giỏ hàng thất bại.',
        response
      }
    } catch (error) {
      throw new Error('Không thể cập nhật giỏ hàng.')
    }
  },

  DeleteCart: async (cartid: any) => {
    try {
      const response = await db.Cart.destroy({ where: { cartid: cartid } })
      return {
        err: response ? 0 : 1,
        msg: response ? 'Thành công' : 'Xóa giỏ hàng thất bại.',
        response
      }
    } catch (error) {
      throw new Error('Không thể xóa giỏ hàng.')
    }
  }
}

export default CartService
