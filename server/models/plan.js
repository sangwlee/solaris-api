'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {});

  Plan.associate = function(models) {
    Plan.hasMany(models.Log, {
      foreignKey: 'logId',
      as: 'logs',
    }),
    Plan.hasMany(models.Message, {
      foreignKey: 'messageId',
      as: 'messages',
    }),
    Plan.belongsTo(models.Student, {
      foreignKey: 'studentId',
      onDelet: 'CASCADE',
    }),
    Plan.belongsTo(models.Teacher, {
      foreignKey: 'teacherId',
      onDelet: 'CASCADE',
    })
  };

  return Plan;
};