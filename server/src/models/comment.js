'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}
  Comment.init(
    {
      cmtid: DataTypes.BIGINT,
      orderid: DataTypes.BIGINT,
      parent_cmtid: DataTypes.BIGINT,
      itemid: DataTypes.BIGINT,
      userid: DataTypes.STRING,
      shopid: DataTypes.BIGINT,
      level: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      rating_star: DataTypes.INTEGER,
      like_count: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      author_username: DataTypes.STRING,
      author_portrait: DataTypes.STRING,
      images: DataTypes.TEXT,
      videos: DataTypes.TEXT,
      model_name: DataTypes.STRING,
      is_replied: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Comment'
    }
  )
  return Comment
}
