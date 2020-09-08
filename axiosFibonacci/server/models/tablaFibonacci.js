'use strict';
module.exports = (sequelize, DataTypes) => {
  const TablaFibonacci = sequelize.define('TablaFibonacci', {
    primerElemento:DataTypes.INTEGER,
    segundoElemento:DataTypes.INTEGER,
    maximoValorSerie:DataTypes.INTEGER,
    sumaPares: DataTypes.INTEGER,
    listaPares: DataTypes.STRING,
    listaTodos: DataTypes.STRING
  }, {});
  TablaFibonacci.associate = function(models) {
    // associations can be defined here
  };
  return TablaFibonacci;
};