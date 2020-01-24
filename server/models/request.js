'use strict';
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Student",
        key: "userId"
      }
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Teacher",
        key:"userId"
      }
    },
  }, {});
  Request.associate = function(models) {
    Request.belongsTo(models.Student, {
      foreignKey: 'studentId',
      onDelete: 'CASCADE',
    }),
    Request.belongsTo(models.Teacher, {
      foreignKey: 'teacherId',
      onDelete: 'CASCADE'
    })
  };
  return Request;
};