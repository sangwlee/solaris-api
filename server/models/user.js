'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Student, {
      foreignKey: 'userId',
      as: 'students',
    }),
    User.hasMany(models.Teacher, {
      foreignKey: 'userId',
      as: 'teachers',
    }),
    User.hasMany(models.Lesson, {
      foreignKey: 'userId',
      as: 'lessons',
    }),
    User.hasMany(models.Message, {
      foreignKey: 'userId',
      as: 'messages',
    })
  };
  return User;
};