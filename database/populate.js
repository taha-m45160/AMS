const {createUser} = require('./Create/createUser')
const {createCourse} = require('./Create/createCourse')
const {createSection} = require('./Create/createSection')
const {createTakes} = require('./Create/createTakes')
const {createTeaches} = require('./Create/createTeaches')
const {createResource} = require('./Create/createResource')
const {createResource} = require('./Create/createResource')
const fs = require('fs').promises;

async function populate(){
    console.log('Populating database...')
}

module.exports = populate