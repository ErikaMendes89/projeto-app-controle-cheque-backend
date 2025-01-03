'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Calculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataCheque: {
        type: Sequelize.DATE
      },
      dataVencimento: {
        type: Sequelize.DATE
      },
      valorCheque: {
        type: Sequelize.FLOAT
      },
      percentualJuros: {
        type: Sequelize.FLOAT
      },
      valorJuros: {
        type: Sequelize.FLOAT
      },
      valorLiquido: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Calculos');
  }
};