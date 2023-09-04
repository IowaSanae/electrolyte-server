'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {}
  Search.init(
    {
      userid: DataTypes.STRING,
      text: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Search'
    }
  )
  return Search
}
