'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.STRING
      },
      popularity: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      thumbnails: {
        type: Sequelize.STRING
      },
      tagline: {
        type: Sequelize.STRING
      },
      vote_count: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};