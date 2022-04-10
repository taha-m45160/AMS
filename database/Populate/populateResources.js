const {createResource} = require('../Create/createResource')
const {readFile} = require('fs').promises

async function populateResources(){
    const file = await readFile('../dummy.pdf')
    await createResource('dummy.pdf', 1, 'CS-100', 'Fall', 2022)
    await createResource('dummy.pdf', 1, 'CS-200', 'Fall', 2022)
    await createResource('dummy.pdf', 2, 'CS-200', 'Fall', 2022)
    await createResource('dummy.pdf', 1, 'CS-202', 'Spring', 2022)
    await createResource('dummy.pdf', 1, 'CS-535', 'Fall', 2022)
    await createResource('dummy.pdf', 2, 'CS-368', 'Spring', 2022)
}

module.exports = {populateResources}