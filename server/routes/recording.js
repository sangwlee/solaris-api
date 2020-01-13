const recordingController = require('../controllers').recording;

module.exports = app => {
  app.post('/recordings', recordingController.create);
  app.get('/recordings/:id', recordingController.read);
  app.patch('/recordings/:id', recordingController.update);
  app.delete('/recordings/:id', recordingController.delete);
};