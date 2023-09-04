'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TierVariations', {
      tierid: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
      name: { type: Sequelize.TEXT },
      option: { type: Sequelize.TEXT },
      images: { type: Sequelize.TEXT },
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
    await queryInterface.dropTable('TierVariations')
  }
}
