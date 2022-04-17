const {createCourse} = require('../Create/createCourse')

async function populateCourses(){

    let course_description = `This course introduces students to the threats as well as defenses for securing networks. Students successfully completing this class will be able to evaluate works in academic and commercial security, and will have rudimentary skills in security research. Topics covered include network security, authentication, security protocol design and analysis, security modeling, trusted computing, key management, program safety, intrusion detection, DDoS detection and mitigation, architecture/operating systems security, security policy, web security, and other emerging topics.`
    let gradeBreakup = `Assignments: 25% \nQuizzes: 25%\n Mid-term Exam: = 20% \n Final Exam: 20% \n Viva: 10%`

    console.log(`Making 'courses' entries...`)

    await createCourse('CS-100', 'Introduction to Programming', course_description, gradeBreakup)
    await createCourse('CS-200', 'Object Oriented Programming', course_description, gradeBreakup)
    await createCourse('CS-202', 'Data Structures', course_description, gradeBreakup)
    await createCourse('CS-535', 'Machine Learning', course_description, gradeBreakup)
    await createCourse('CS-368', 'Network-Centric Computing', course_description, gradeBreakup)
}

module.exports = {populateCourses}