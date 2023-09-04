'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TierVariation extends Model {
    static associate(models) {
      TierVariation.hasOne(models.Post, { foreignKey: 'tierid', as: 'tier_variations' })
      TierVariation.hasOne(models.Cart, { foreignKey: 'itemid', as: 'cart_tier_variations' })
    }
  }
  TierVariation.init(
    {
      tierid: DataTypes.BIGINT,
      name: DataTypes.TEXT,
      option: DataTypes.TEXT,
      images: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'TierVariation'
    }
  )
  return TierVariation
}
