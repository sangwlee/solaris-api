'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recording = sequelize.define('Recording', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    type: DataTypes.STRING,
    url: DataTypes.STRING,
    logId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Log",
        key:"id"
      }
    },
  }, {});
  Recording.associate = function(models) {
    Recording.belongsTo(models.Log, {
      foreignKey: 'logId',
      onDelete: 'CASCADE',
    })
  };
  return Recording;
};