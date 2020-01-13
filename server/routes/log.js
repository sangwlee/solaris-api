const logController = require('../controllers').log;

module.exports = app => {
  app.post('/logs', logController.create);
  app.get('/logs/:id', logController.read);
  app.patch('/logs/:id', logController.update);
  app.delete('/logs/:id', logController.delete);
};