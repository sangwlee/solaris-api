const Teacher = require('../models').Teacher;

module.exports = {
  create: async (req, res) => {
    try {
      const created = await Teacher.create(req.body)
      return res.status(200).json(created)
    } catch (err) {
      console.log(err)
    }
  },
  read: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const found = await Teacher.findByPk(id)
      return res.status(200).json(found)
    } catch (err) {
      console.log(err)
    }
  },
  update: async (req, res) => {
    try {
      const id = Number(req.params.id)
      req.body.id = id
      const edited = await Teacher.upsert(req.body)
      return res.status(200).json(edited)
    } catch (err) {
      console.log(err)
    }
  },
  delete: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const deleted = await Teacher.destroy({ where: { id }}, { returning: true })
      return res.status(200).json(deleted)
    } catch (err) {
      console.log(err)
    }
  },
  getAllTeachers: async(req, res) => {
    try {
      const teachers = await Teacher.findAll();
      const teacherUsers = await Promise.all(teachers.map(async teacher => (await teacher.getUser())));
      return res.status(200).json(teacherUsers);
    } catch (err) {
      console.log(err)
      return res.status(500).json([])
    }
  },
  getAllRequests: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const teacher = await Teacher.findOne({ where: { userId: id }});
      const requests = await teacher.getRequests()
      const requestingStudents = await Promise.all(requests.map(async request => (await request.getStudent())))
      const requestingUsers = await Promise.all(requestingStudents.map(async t => (await t.getUser())))
      return res.status(200).json(requestingUsers)
    } catch (err) {
      console.log(err)
    }
  }
};