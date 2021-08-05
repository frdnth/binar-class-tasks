'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "Animals",
      [
        {
          name: "kambing",
          age: 7,
          farmId: null,
          healthStatus: "sehat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ayam",
          age: 2,
          farmId: null,
          healthStatus: "sehat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "domba",
          age: 5,
          farmId: null,
          healthStatus: "sehat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
