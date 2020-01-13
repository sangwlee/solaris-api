const lessonController = require('../controllers').lesson;

module.exports = app => {
  app.post('/lessons', lessonController.create);
  app.get('/lessons/:id', lessonController.read);
  app.patch('/lessons/:id', lessonController.update);
  app.delete('/lessons/:id', lessonController.delete);
};