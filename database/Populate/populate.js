const {populateUsers} = require('./populateUsers')
const {populateCourses} = require('./populateCourses')

async function populate(){
    console.log('\nPopulating database...\n')
    
    await populateUsers();
    await populateCourses();
}

module.exports = populate