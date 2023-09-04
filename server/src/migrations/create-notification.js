'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: { type: Sequelize.STRING },
      title: { type: Sequelize.STRING },
      content: { type: Sequelize.STRING },
      userid: { type: Sequelize.STRING },
      seen: { type: Sequelize.BOOLEAN },
      time: { type: Sequelize.STRING },
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
    await queryInterface.dropTable('Notifications')
  }
}
