'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Users',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM('expence', 'cashin', 'cashout'),
        allowNull: false
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      constestId: {
        field: 'contest_id',
        type: Sequelize.INTEGER,
        reference: {
          model: 'Contests',
          key: 'id'
        }
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};