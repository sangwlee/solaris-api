const { STUDENT_TEACHERS } = require('./constants')

console.log({ STUDENT_TEACHERS})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentTeachers', STUDENT_TEACHERS);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StudentTeachers', null, {});
  }
};