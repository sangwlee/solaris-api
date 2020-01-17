const userController = require('../controllers').user;

module.exports = app => {
  app.post('/users', userController.create);
  app.get('/users/:id', userController.read);
  app.patch('/users/:id', userController.update);
  app.delete('/users/:id', userController.delete);
  app.post('/users/authenticate', userController.authenticate);
};