const { STUDENT_TEACHERS } = require('./constants')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentTeachers', STUDENT_TEACHERS);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StudentTeachers', null, {});
  }
};