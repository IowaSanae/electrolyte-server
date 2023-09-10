'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      Shop.hasOne(models.Shop, { foreignKey: 'shopid', as: 'shop_info' })
    }
  }
  Shop.init(
    {
      shopid: DataTypes.STRING,
      userid: DataTypes.STRING,
      item_count: DataTypes.INTEGER,
      name: DataTypes.STRING,
      cover: DataTypes.STRING,
      status: DataTypes.INTEGER,
      username: DataTypes.STRING,
      portrait: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Shop'
    }
  )
  return Shop
}
