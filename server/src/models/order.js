'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'userid', targetKey: 'userid', as: 'user' })
    }
  }
  Order.init(
    {
      orderid: DataTypes.BIGINT,
      userid: DataTypes.STRING,
      shopid: DataTypes.INTEGER,
      shop_name: DataTypes.STRING,
      item_groups_id: DataTypes.STRING,
      amount: DataTypes.STRING,
      option: DataTypes.STRING,
      state: DataTypes.STRING,
      final_total: DataTypes.INTEGER,
      total_num_items: DataTypes.INTEGER,
      type: DataTypes.INTEGER,
      note: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Order'
    }
  )
  return Order
}
