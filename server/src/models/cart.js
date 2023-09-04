'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Post, { foreignKey: 'itemid', targetKey: 'itemid', as: 'overview' })
      Cart.belongsTo(models.TierVariation, {
        foreignKey: 'itemid',
        targetKey: 'tierid',
        as: 'cart_tier_variations'
      })
    }
  }
  Cart.init(
    {
      cartid: DataTypes.BIGINT,
      userid: DataTypes.STRING,
      itemid: DataTypes.BIGINT,
      shopid: DataTypes.BIGINT,
      amount: DataTypes.INTEGER,
      option: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Cart'
    }
  )
  return Cart
}
