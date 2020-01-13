const messageController = require('../controllers').message;

module.exports = app => {
  app.post('/messages', messageController.create);
  app.get('/messages/:id', messageController.read);
  app.patch('/messages/:id', messageController.update);
  app.delete('/messages/:id', messageController.delete);
};