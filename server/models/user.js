'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Lesson, {
      foreignKey: 'userId',
      as: 'lessons',
    }),
    User.hasMany(models.Message, {
      foreignKey: 'userId',
      as: 'messages',
    }),
    User.hasOne(models.Student, { 
      foreignKey: 'userId' ,
      as: 'student',
    }),
    User.hasOne(models.Teacher, { 
      foreignKey: 'userId',
      as: 'teacher',
    })
  };
  return User;
};