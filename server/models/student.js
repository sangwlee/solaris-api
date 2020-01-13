'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  }, {});
  Student.associate = function(models) {
    Student.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    }),
    Student.hasMany(models.Plan, {
      foreignKey: 'studentId',
      onDelete: 'CASCADE',
    })
  };
  return Student;
};