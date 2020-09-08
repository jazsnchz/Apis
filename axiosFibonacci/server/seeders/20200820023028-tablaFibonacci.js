'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TablaFibonacci', [
      {
        primerElemento: 1,
        segundoElemento: 2,
        maximoValorSerie: 3,
        sumaPares: 2,
        listaPares: '1',
        listaTodos: '3',
        created: new Date(Date.now()),
        updated: new Date(Date.now())
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('TablaFibonacci', null, {});
  }
};
