const teacherController = require('../controllers').teacher;

module.exports = app => {
  app.post('/teachers', teacherController.create);
  app.get('/teachers/:id', teacherController.read);
  app.patch('/teachers/:id', teacherController.update);
  app.delete('/teachers/:id', teacherController.delete);
  app.get('/teachers', teacherController.getAllTeachers);
  app.get('/teachers/:id/requests', teacherController.getAllRequests);
};