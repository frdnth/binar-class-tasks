'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      /* Add seed commands here.
     
      Example: */
      await queryInterface.bulkInsert('Farms', [
         { name: 'azka farm', address: 'bogor', userId: 3, animalId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'azka farm', address: 'bogor', userId: 3, animalId: 2, createdAt: new Date(), updatedAt: new Date()},
      { name: 'azka farm', address: 'bogor', userId: 3, animalId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'yan farm', address: 'bandung', userId: 11, animalId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'yan farm', address: 'bandung', userId: 11, animalId: 2, createdAt: new Date(), updatedAt: new Date()},
      { name: 'yan farm', address: 'bandung', userId: 11, animalId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'bayu farm', address: 'bandung', userId: 2, animalId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'bayu farm', address: 'bandung', userId: 2, animalId: 2, createdAt: new Date(), updatedAt: new Date()},
      { name: 'bayu farm', address: 'bandung', userId: 2, animalId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'bayu farm', address: 'bandung', userId: 2, animalId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'bayu farm', address: 'bandung', userId: 2, animalId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'bayu farm', address: 'bandung', userId: 2, animalId: 1, createdAt: new Date(), updatedAt: new Date()}
     ], {});
   
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
