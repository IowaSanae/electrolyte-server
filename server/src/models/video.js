'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate(models) {
      Video.hasOne(models.Video, { foreignKey: 'video_id' })
    }
  }

  Video.init(
    {
      video_id: DataTypes.STRING,
      thumb_url: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      version: DataTypes.INTEGER,
      width: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      defn: DataTypes.STRING,
      profile: DataTypes.STRING,
      url: DataTypes.STRING
    },

    {
      sequelize,
      modelName: 'Video'
    }
  )
  return Video
}
