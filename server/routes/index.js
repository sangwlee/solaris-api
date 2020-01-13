const lessonRoute = require('./lesson')
const logRoute = require('./log')
const messageRoute = require('./message')
const planRoute = require('./plan')
const recordingRoute = require('./recording')
const studentRoute = require('./student')
const teacherRoute = require('./teacher')
const userRoute = require('./user')

module.exports = app => {
  lessonRoute(app)
  logRoute(app)
  messageRoute(app)
  planRoute(app)
  recordingRoute(app)
  studentRoute(app)
  teacherRoute(app)
  userRoute(app)
};