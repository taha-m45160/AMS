const {createResource} = require('../Create/createResource')
const fs = require('fs').promises;

async function populateResources(){

    console.log(`Making 'resources' entries...`)

    const contents = await fs.readFile('./dummy.pdf', {encoding: 'base64'});

    await createResource('dummy.pdf', 1, 'CS-100', 'Fall', 2022, contents)
    await createResource('dummy.pdf', 1, 'CS-200', 'Fall', 2022, contents)
    await createResource('dummy.pdf', 2, 'CS-200', 'Fall', 2022, contents)
    await createResource('dummy.pdf', 1, 'CS-202', 'Spring', 2022, contents)
    await createResource('dummy.pdf', 1, 'CS-535', 'Fall', 2022, contents)
    await createResource('dummy.pdf', 2, 'CS-368', 'Spring', 2022, contents)
}

module.exports = {populateResources}