'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      orderid: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
      userid: { type: Sequelize.STRING },
      shopid: { type: Sequelize.INTEGER },
      shop_name: { type: Sequelize.STRING },
      type: { type: Sequelize.INTEGER },
      state: { type: Sequelize.STRING },
      total_num_items: { type: Sequelize.INTEGER },
      note: { type: Sequelize.STRING },
      amount: { type: Sequelize.STRING },
      option: { type: Sequelize.STRING },
      item_groups_id: { type: Sequelize.STRING },
      final_total: { type: Sequelize.INTEGER },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id: {
        type: Sequelize.INTEGER
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders')
  }
}
