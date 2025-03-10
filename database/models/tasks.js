'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tasks.belongsTo(models.Users, {
        foreignKey: "author_id",
        "as": "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Tasks.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: DataTypes.STRING,
    tasks: DataTypes.JSON,
    author_id: DataTypes.UUID
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Tasks',
    tableName: "tasks"
  });
  return Tasks;
};