'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      shopid: { type: Sequelize.BIGINT, allowNull: false, primaryKey: true },
      userid: { type: Sequelize.STRING },
      item_count: { type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      cover: { type: Sequelize.STRING },
      status: { type: Sequelize.INTEGER },
      username: { type: Sequelize.STRING },
      portrait: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING(10000) },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      id: {
        type: Sequelize.INTEGER
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops')
  }
}
