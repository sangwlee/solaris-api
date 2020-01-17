'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Plan",
        key:"id"
      },
    },
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