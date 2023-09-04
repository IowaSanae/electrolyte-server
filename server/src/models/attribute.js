'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Attribute extends Model {
    static associate(models) {
      Attribute.hasOne(models.Post, { foreignKey: 'attributeid', as: 'attributes' })
    }
  }
  Attribute.init(
    {
      attributeid: DataTypes.BIGINT,
      name: DataTypes.TEXT,
      value: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Attribute'
    }
  )
  return Attribute
}
