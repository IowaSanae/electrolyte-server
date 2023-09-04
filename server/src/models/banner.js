'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {}
  Banner.init(
    {
      image_url: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Banner'
    }
  )
  return Banner
}
