const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Calculo = sequelize.define('Calculo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dataCheque: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataVencimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valorCheque: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  percentualJuros: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  valorJuros: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  valorLiquido: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true, // Adiciona campos `createdAt` e `updatedAt`
  tableName: 'calculos',
});

module.exports = Calculo;
