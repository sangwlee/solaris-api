const requestController = require('../controllers').request;

module.exports = app => {
  app.post('/requests', requestController.create);
  app.get('/requests/:id', requestController.read);
  app.patch('/requests/:id', requestController.update);
  app.delete('/requests/:id', requestController.delete);
};