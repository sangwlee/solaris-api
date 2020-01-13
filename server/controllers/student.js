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
  }
};