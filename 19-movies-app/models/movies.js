'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movies.init({
    title: DataTypes.STRING,
    overview: DataTypes.STRING,
    popularity: DataTypes.STRING,
    rating: DataTypes.STRING,
    release_date: DataTypes.DATE,
    thumbnails: DataTypes.STRING,
    tagline: DataTypes.STRING,
    vote_count: DataTypes.STRING,
    company_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};