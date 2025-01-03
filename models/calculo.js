'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Calculo.init({
    dataCheque: DataTypes.DATE,
    dataVencimento: DataTypes.DATE,
    valorCheque: DataTypes.FLOAT,
    percentualJuros: DataTypes.FLOAT,
    valorJuros: DataTypes.FLOAT,
    valorLiquido: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Calculo',
  });
  return Calculo;
};