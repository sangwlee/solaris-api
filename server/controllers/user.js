const User = require('../models').User;

module.exports = {
  create: async (req, res) => {
    try {
      const created = await User.create(req.body)
      return res.status(200).json(created)
    } catch (err) {
      console.log(err)
    }
  },
  read: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const found = await User.findByPk(id)
      return res.status(200).json(found)
    } catch (err) {
      console.log(err)
    }
  },
  update: async (req, res) => {
    try {
      const id = Number(req.params.id)
      req.body.id = id
      const edited = await User.upsert(req.body)
      return res.status(200).json(edited)
    } catch (err) {
      console.log(err)
    }
  },
  delete: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const deleted = await User.destroy({ where: { id }}, { returning: true })
      return res.status(200).json(deleted)
    } catch (err) {
      console.log(err)
    }
  },
  authenticate: async (req, res) => {
    console.log(`authenticating: ${JSON.stringify(req.body)}`)
    try {
      const user = await User.findOne({ where: req.body })
      return (user ? res.status(200).json(user) : res.status(400).json(null))
    } catch (err) {
      console.log(err)
    }
  },
  getStudents: async (req, res) => {
    const { userId } = req.params
    const user = await User.findOne({ where: { id: userId } })
    const teacher = await user.getTeacher()

    if (!teacher) { 
      return res.status(404).json(null) 
    } else {
      const students = await teacher.getStudents()
      const studentUsers = await Promise.all(students.map(async student => (await student.getUser())))
      return res.status(200).json(studentUsers)
    }
  },
  getTeachers: async (req, res) => {
    const { userId } = req.params
    const user = await User.findOne({ where: { id: userId }})
    const student = await user.getStudent()

    if (!student) {
      return res.status(404).json(null)
    } else {
      const teachers = await student.getTeachers()
      const teacherUsers = await Promise.all(teachers.map(async teacher => (await teacher.getUser())))
      return res.status(200).json(teacherUsers)
    }
  },
};