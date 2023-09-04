'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attributes', {
      attributeid: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
      name: { type: Sequelize.TEXT },
      value: { type: Sequelize.TEXT },
      id: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable('Attributes')
  }
}
