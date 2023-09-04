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
      rating_star: DataTypes.INTEGER,
      name: DataTypes.STRING,
      cover: DataTypes.STRING,
      follower_count: DataTypes.INTEGER,
      rating_bad: DataTypes.INTEGER,
      rating_good: DataTypes.INTEGER,
      rating_normal: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      shop_location: DataTypes.STRING,
      username: DataTypes.STRING,
      portrait: DataTypes.STRING,
      response_time: DataTypes.INTEGER,
      description: DataTypes.STRING,
      followed: DataTypes.BOOLEAN,
      ctime: DataTypes.DATE,
      mtime: DataTypes.DATE,
      response_rate: DataTypes.INTEGER,
      country: DataTypes.STRING,
      last_active_time: DataTypes.BIGINT
    },
    {
      sequelize,
      modelName: 'Shop'
    }
  )
  return Shop
}
