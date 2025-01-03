const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./clienteModel');

const Cheque = sequelize.define('Cheque', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  vencimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING, // Caminho ou URL da foto
    allowNull: true,
  },
}, {
  timestamps: true,
  tableName: 'cheques',
});

// Relacionamento: Um Cliente pode ter vários Cheques
Cliente.hasMany(Cheque, { foreignKey: 'clienteId' });
Cheque.belongsTo(Cliente, { foreignKey: 'clienteId' });

module.exports = Cheque;
