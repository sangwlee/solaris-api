'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key:"id"
      }
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
    }),
    Student.belongsToMany(models.Teacher, { 
      through: 'StudentTeachers',
      foreignKey: 'studentId',
    })
  };
  return Student;
};