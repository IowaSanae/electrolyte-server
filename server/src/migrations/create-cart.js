'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      cartid: { type: Sequelize.BIGINT, allowNull: false, primaryKey: true },
      userid: { type: Sequelize.STRING },
      itemid: { type: Sequelize.BIGINT },
      shopid: { type: Sequelize.BIGINT },
      amount: { type: Sequelize.INTEGER },
      option: { type: Sequelize.STRING },
      id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts')
  }
}
