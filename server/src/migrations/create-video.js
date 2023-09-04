'use strict'

const { INTEGER } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Videos', {
      video_id: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
      thumb_url: { type: Sequelize.STRING },
      duration: { type: Sequelize.INTEGER },
      version: { type: Sequelize.INTEGER },
      width: { type: Sequelize.INTEGER },
      height: { type: Sequelize.INTEGER },
      defn: { type: Sequelize.STRING },
      profile: { type: Sequelize.STRING },
      url: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      id: { type: Sequelize.INTEGER }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Videos')
  }
}
