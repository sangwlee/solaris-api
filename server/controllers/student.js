const Student = require('../models').Student;

module.exports = {
  create: async (req, res) => {
    try {
      const created = await Student.create(req.body)
      return res.status(200).json(created)
    } catch (err) {
      console.log(err)
    }
  },
  read: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const found = await Student.findByPk(id)
      return res.status(200).json(found)
    } catch (err) {
      console.log(err)
    }
  },
  update: async (req, res) => {
    try {
      const id = Number(req.params.id)
      req.body.id = id
      const edited = await Student.upsert(req.body)
      return res.status(200).json(edited)
    } catch (err) {
      console.log(err)
    }
  },
  delete: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const deleted = await Student.destroy({ where: { id }}, { returning: true })
      return res.status(200).json(deleted)
    } catch (err) {
      console.log(err)
    }
  },
  getAllStudents: async(req, res) => {
    try {
      const students = await Student.findAll();
      const studentUsers = await Promise.all(students.map(async student => (await student.getUser())));
      return res.status(200).json(studentUsers);
    } catch (err) {
      console.log(err)
      return res.status(500).json([])
    }
  },
  getAllRequests: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const student = await Student.findOne({ where: { userId: id }});
      const requests = await student.getRequests()
      const requestingTeachers = await Promise.all(requests.map(async request => (await request.getTeacher())))
      const requestingUsers = await Promise.all(requestingTeachers.map(async t => (await t.getUser())))
      return res.status(200).json(requestingUsers)
    } catch (err) {
      console.log(err)
    }
  }
};