const {populateUsers} = require('./populateUsers')
const {populateCourses} = require('./populateCourses')
const {populateSections} = require('./populateSections')
const {populateTakes} = require('./populateTakes')
const {populateTeaches} = require('./populateTeaches')

async function populate(){
    console.log('\nPopulating database...\n')

    const mongoose = require('mongoose')
    const db = await mongoose.connection.db
    
    await populateUsers();
    await populateCourses();
    await populateSections();
    await populateTakes();
    await populateTeaches();
}

module.exports = {populate}

// git commit -m "db-entries" -m "users+courses+sections+takes+teaches" 