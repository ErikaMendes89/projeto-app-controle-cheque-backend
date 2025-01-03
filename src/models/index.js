const sequelize = require('../config/database');
const Cliente = require('./clienteModel');
const Cheque = require('./chequeModel');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');

    await sequelize.sync({ force: false }); // Altere para `true` para recriar as tabelas
    console.log('Tabelas sincronizadas com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

module.exports = { syncDatabase, Cliente, Cheque };
