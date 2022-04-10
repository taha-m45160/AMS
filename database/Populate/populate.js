const {populateUsers} = require('./populateUsers')
const {populateCourses} = require('./populateCourses')
const {populateSections} = require('./populateSections')
const {populateTakes} = require('./populateTakes')
const {populateTeaches} = require('./populateTeaches')
const {populateResources} = require('./populateResources')
const {populateQuizzes} = require('./populateQuizzes')
const {populateAssignments} = require('./populateAssignments')
const {populateAnnouncements} = require('./populateAnnouncements')
const {populateGradebook} = require('./populateGradebook')


async function populate(){

    console.log('\nPopulating database...\n')

    await populateUsers();
    await populateCourses();
    await populateSections();
    await populateTakes();
    await populateTeaches();
    await populateResources();
    await populateQuizzes();
    await populateAssignments();
    await populateAnnouncements();
    await populateGradebook();
}

module.exports = populate