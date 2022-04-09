const {createCourse} = require('../Create/createCourse')

async function populateCourses(){
    console.log(`Making 'courses' entries...`)
    await createCourse('CS-100', 'Introduction to Programming')
    await createCourse('CS-360', 'Software Engineering')
    await createCourse('CS-200', 'Object Oriented Programming')
    await createCourse('CS-202', 'Data Structures')
    await createCourse('CS-535', 'Machine Learning')
    await createCourse('CS-368', 'Network-Centric Computing')
}

module.exports = {populateCourses}