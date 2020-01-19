const { STUDENTS } = require('./constants')
 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', STUDENTS);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};