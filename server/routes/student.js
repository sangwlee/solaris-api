const studentController = require('../controllers').student;

module.exports = app => {
  app.post('/students', studentController.create);
  app.get('/students/:id', studentController.read);
  app.patch('/students/:id', studentController.update);
  app.delete('/students/:id', studentController.delete);
  app.get('/students', studentController.getAllStudents);
  app.get('/students/:id/requests', studentController.getAllRequests);
};