const {createCourse} = require('../Create/createCourse')

async function populateCourses(){

    let course_description = `Welcome to a fun-filled course!`
    let gradeBreakup = `Assignments: 25% \nQuizzes: 25%\n Mid-term Exam: = 20% \n Final Exam: 20% \n Viva: 10%`

    console.log(`Making 'courses' entries...`)

    await createCourse('CS-100', 'Introduction to Programming', course_description, gradeBreakup)
    await createCourse('CS-200', 'Object Oriented Programming', course_description, gradeBreakup)
    await createCourse('CS-202', 'Data Structures', course_description, gradeBreakup)
    await createCourse('CS-535', 'Machine Learning', course_description, gradeBreakup)
    await createCourse('CS-368', 'Network-Centric Computing', course_description, gradeBreakup)
}

module.exports = {populateCourses}