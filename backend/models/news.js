"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //News.hasOne(models.User,{foreignKey: "userId"})
      News.hasMany(models.Comment, { foreignKey: "newsId" });
    }
  }
  News.init(
    {
      id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
      description: DataTypes.TEXT,
      picture: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
