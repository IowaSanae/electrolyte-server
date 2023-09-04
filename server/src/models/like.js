'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.Post, { foreignKey: 'itemid', targetKey: 'itemid', as: 'likeDetail' })
    }
  }
  Like.init(
    {
      userid: DataTypes.STRING,
      itemid: DataTypes.BIGINT,
      shopid: DataTypes.BIGINT
    },
    {
      sequelize,
      modelName: 'Like'
    }
  )
  return Like
}
