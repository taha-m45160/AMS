const {createResource} = require('../Create/createResource')
const {readFile} = require('fs').promises

async function populateResources(){
    const file = await readFile('../dummy.pdf')
    console.log(file)
    await createResource('dummy.pdf', 1, 'CS-100', 'Fall', 2021, file)
    await createResource('dummy.pdf', 2, 'CS-200', 'Fall', 2021, file)
}

module.exports = {populateResources}