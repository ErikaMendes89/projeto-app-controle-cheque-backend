const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco de dados
  process.env.DB_USER, // Usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST || 'localhost', // Host do banco
    dialect: 'mysql', // Dialeto do banco
    logging: false, // Desativa logs de queries
  }
);

module.exports = sequelize;
