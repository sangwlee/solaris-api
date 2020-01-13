'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recording = sequelize.define('Recording', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Recording.associate = function(models) {
    Recording.belongsTo(models.Log, {
      foreignKey: 'logId',
      onDelete: 'CASCADE',
    })
  };
  return Recording;
};