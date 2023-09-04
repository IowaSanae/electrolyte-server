'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
      shopid: { type: Sequelize.BIGINT, allowNull: false, primaryKey: true },
      userid: { type: Sequelize.STRING },
      item_count: { type: Sequelize.INTEGER },
      rating_star: { type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      cover: { type: Sequelize.STRING },
      follower_count: { type: Sequelize.INTEGER },
      rating_bad: { type: Sequelize.INTEGER },
      rating_good: { type: Sequelize.INTEGER },
      rating_normal: { type: Sequelize.INTEGER },
      status: { type: Sequelize.INTEGER },
      shop_location: { type: Sequelize.STRING },
      username: { type: Sequelize.STRING },
      portrait: { type: Sequelize.STRING },
      ctime: { type: Sequelize.DATE },
      mtime: { type: Sequelize.DATE },
      response_rate: { type: Sequelize.INTEGER },
      country: { type: Sequelize.STRING },
      response_time: { type: Sequelize.INTEGER },
      description: { type: Sequelize.STRING(10000) },
      followed: { type: Sequelize.BOOLEAN },
      last_active_time: { type: Sequelize.BIGINT },
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
