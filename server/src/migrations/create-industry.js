'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Industries', {
      catid: { type: Sequelize.INTEGER, primaryKey: true, allowNull: false },
      parent_catid: { type: Sequelize.INTEGER },
      level: { type: Sequelize.INTEGER },
      category_name: { type: Sequelize.STRING },
      images: { type: Sequelize.STRING },
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
    await queryInterface.dropTable('Industries')
  }
}
