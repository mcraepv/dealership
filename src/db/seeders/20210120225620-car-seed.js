'use strict';
const uuidv4 = require('uuid');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [
      {
        id: uuidv4.v4(),
        name: 'Sally',
        doors: 4,
        automatic: true,
        isNew: false,
        price: 4000,
        miles: 50000,
        dealershipId: uuidv4.v4(),
        sold: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  },
};
