'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Order, { foreignKey: 'userid', as: 'user' })
    }
  }
  User.init(
    {
      sex: DataTypes.INTEGER,
      role: DataTypes.STRING,
      userid: DataTypes.STRING,
      shopid: DataTypes.BIGINT,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      birthday: DataTypes.DATE,
      phone: DataTypes.BIGINT,
      avatar: DataTypes.STRING,
      filename: DataTypes.STRING,
      not_new_user: DataTypes.BOOLEAN,
      refreshToken: DataTypes.STRING,
      passwordResetToken: DataTypes.STRING,
      passwordResetExpires: DataTypes.STRING,
      passwordChangedAt: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
