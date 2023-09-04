'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Rooms', {
            roomid: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userid: { type: Sequelize.STRING },
            shopid: { type: Sequelize.BIGINT },
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
        await queryInterface.dropTable('Rooms')
    }
}