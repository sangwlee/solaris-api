const faker = require('faker')

const numUsers = 50
const users = []
for (let i = 1; i <= numUsers; i++) {
  const firstname = faker.name.firstName()

  users.push({
    username: faker.internet.userName(),
    password: firstname,
    firstname: firstname,
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

const fractionStudents = 0.5
const fractionTeachers = 0.3

const numStudents = Math.floor(numUsers * fractionStudents)
const numTeachers = Math.floor(numUsers * fractionTeachers)

const studentIds = []
const teacherIds = []

let currId = 1
while (currId++ <= numStudents) studentIds.push(currId);
while (currId++ <= numTeachers + numStudents) teacherIds.push(currId)

const studentTeachers = []
const maxNumStudentsPerTeacher = 5
const queue = JSON.parse(JSON.stringify(studentIds))

for (const teacherId of teacherIds) {
  let randomNum = Math.ceil(Math.random() * maxNumStudentsPerTeacher)

  while (randomNum-- && queue.length) {
    const studentId = queue.shift();

    if (!studentId) { break; }
    studentTeachers.push({
      teacherId,
      studentId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
}

module.exports.USERS = users
module.exports.STUDENTS = studentIds.map(id => ({ userId: id, createdAt: new Date(), updatedAt: new Date() }))
module.exports.TEACHERS = teacherIds.map(id => ({ userId: id, createdAt: new Date(), updatedAt: new Date() }))
module.exports.STUDENT_TEACHERS = studentTeachers

