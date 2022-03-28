const {createUser} = require('./Create/createUser')
const {createCourse} = require('./Create/createCourse')
const {createSection} = require('./Create/createSection')

async function populate(){
    console.log('Populating database...')
    console.log(`Making 'user' entries...`)
    await createUser(23100222, 'John', undefined, 'Faisal', 'john.faisal@gmail.com', 'Student', 'Hello123')
    await createUser(23100088, 'Samee', undefined, 'Arif', 'samee.arif@gmail.com', 'Teacher', 'Hello123')
    await createUser(23100086, 'Faizan', undefined, 'Elahi', 'fazian.elahi@gmail.com', 'Parent', 'Hello123', [23100222])
    console.log(`Making 'course' entries...`)
    await createCourse('CS-100', 'Introduction to Programming')
    await createCourse('CS-200', 'Object Oriented Programming')
    await createCourse('CS-202', 'Data Structures')
    console.log(`Making 'section' entries...`)
    await createSection(1, 'CS-100', 'Fall', 2021)
    await createSection(1, 'CS-200', 'Fall', 2021)
    await createSection(2, 'CS-200', 'Fall', 2021)
}

module.exports = populate