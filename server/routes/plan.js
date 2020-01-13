const planController = require('../controllers').plan;

module.exports = app => {
  app.post('/plans', planController.create);
  app.get('/plans/:id', planController.read);
  app.patch('/plans/:id', planController.update);
  app.delete('/plans/:id', planController.delete);
};