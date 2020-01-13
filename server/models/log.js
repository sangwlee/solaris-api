'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});

  Log.associate = function(models) {
    Log.belongsTo(models.Plan, {
      foreignKey: 'planId',
      onDelete: 'CASCADE',
    }),
    Log.hasMany(models.Recording, {
      foreignKey: 'logId',
      as: 'recordings',
    })
  };

  return Log;
};