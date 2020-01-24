'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
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
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    }),
    Teacher.hasMany(models.Plan, {
      foreignKey: 'teacherId',
      onDelete: 'CASCADE',
    }),
    Teacher.hasMany(models.Request, {
      foreignKey: 'teacherId',
      onDelete: 'CASCADE',
    }),
    Teacher.belongsToMany(models.Student, { 
      through: 'StudentTeachers',
      foreignKey: 'teacherId',
    })
  };
  return Teacher;
};