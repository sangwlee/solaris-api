'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key:"id"
      }
    },
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    }),
    Teacher.hasMany(models.Plan, {
      foreignKey: 'teacherId',
      onDelete: 'CASCADE',
    })
  };
  return Teacher;
};