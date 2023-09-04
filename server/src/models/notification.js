'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {}
  Notification.init(
    {
      userid: DataTypes.STRING,
      seen: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      time: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Notification'
    }
  )
  return Notification
}
