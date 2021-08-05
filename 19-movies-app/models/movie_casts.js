'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_casts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movie_casts.init({
    movie_id: DataTypes.INTEGER,
    actors_id: DataTypes.INTEGER,
    character_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie_casts',
  });
  return movie_casts;
};