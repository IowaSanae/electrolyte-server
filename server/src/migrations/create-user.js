'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userid: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
      sex: { type: Sequelize.INTEGER },
      shopid: { type: Sequelize.BIGINT },
      password: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      birthday: { type: Sequelize.DATE },
      phone: { type: Sequelize.BIGINT },
      not_new_user: { type: Sequelize.BOOLEAN },
      avatar: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING },
      filename: { type: Sequelize.STRING },
      refreshToken: { type: Sequelize.STRING },
      passwordResetToken: { type: Sequelize.STRING },
      passwordResetExpires: { type: Sequelize.STRING },
      passwordChangedAt: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      id: { type: Sequelize.INTEGER }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
}
