'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Industry extends Model {
    static associate(models) {
      Industry.hasOne(models.Post, { foreignKey: 'catid' })
    }
  }

  Industry.init(
    {
      catid: DataTypes.INTEGER,
      parent_catid: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
      category_name: DataTypes.STRING,
      images: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Industry'
    }
  )
  return Industry
}
