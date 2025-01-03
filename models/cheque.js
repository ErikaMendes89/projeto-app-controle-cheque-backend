'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cheque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cheque.init({
    clienteId: DataTypes.INTEGER,
    numero: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    vencimento: DataTypes.DATE,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cheque',
  });
  return Cheque;
};