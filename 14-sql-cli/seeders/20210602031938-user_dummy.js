'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* 
      Add seed commands here.
     
      Example:
      */
      await queryInterface.bulkInsert('Users', [
        { firstName: 'bayu', lastName: 'firmansyah', email: 'bayu_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'azka', lastName: 'firmansyah', email: 'azka_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'ilham', lastName: 'firmansyah', email: 'ilham_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'jesica', lastName: 'firmansyah', email: 'jesica_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'damai', lastName: 'firmansyah', email: 'damai_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'febi', lastName: 'firmansyah', email: 'febi_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'nuki', lastName: 'firmansyah', email: 'nuki_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'dhimas', lastName: 'firmansyah', email: 'dhimas_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'adryan', lastName: 'firmansyah', email: 'adryan_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'yan', lastName: 'firmansyah', email: 'yan_tampan@gmail.com' , createdAt: new Date(), updatedAt: new Date()},
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
