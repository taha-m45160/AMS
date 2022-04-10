const {createSection} = require('../Create/createSection')

async function populateSections () {

    console.log(`Making 'sections' entries...`)
    
    await createSection(1, 'CS-100', 'Fall', 2022)
    await createSection(2, 'CS-100', 'Fall', 2022)
    await createSection(1, 'CS-200', 'Fall', 2022)
    await createSection(2, 'CS-200', 'Fall', 2022)
    await createSection(1, 'CS-202', 'Spring', 2022)
    await createSection(1, 'CS-535', 'Fall', 2022)
    await createSection(1, 'CS-368', 'Spring', 2022)
    await createSection(2, 'CS-368', 'Spring', 2022)
}

module.exports = {populateSections}