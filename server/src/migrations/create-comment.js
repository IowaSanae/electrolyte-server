'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      cmtid: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
      parent_cmtid: { type: Sequelize.BIGINT },
      userid: { type: Sequelize.STRING },
      orderid: { type: Sequelize.BIGINT },
      itemid: { type: Sequelize.BIGINT },
      level: { type: Sequelize.INTEGER },
      rating: { type: Sequelize.INTEGER },
      shopid: { type: Sequelize.BIGINT },
      comment: { type: Sequelize.STRING(1000) },
      rating_star: { type: Sequelize.INTEGER },
      status: { type: Sequelize.INTEGER },
      author_username: { type: Sequelize.STRING },
      author_portrait: { type: Sequelize.STRING },
      images: { type: Sequelize.TEXT },
      videos: { type: Sequelize.TEXT },
      model_name: { type: Sequelize.STRING },
      is_replied: { type: Sequelize.BOOLEAN },
      like_count: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable('Comments')
  }
}
