'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomeCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      display_name: { type: Sequelize.STRING },
      catid: { type: Sequelize.BIGINT },
      parent_catid: { type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      image: { type: Sequelize.STRING(1000) },
      unselected_image: { type: Sequelize.STRING },
      selected_image: { type: Sequelize.STRING },
      level: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable('HomeCategories')
  }
}
