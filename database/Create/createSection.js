const Section = require('../Schema/Section.js')

async function createSection(ID, c_id, term, year) {
    try {
        const section = await Section.create({
            ID: ID,
            course_ID: c_id,
            term: term,
            year: year
        })
        await section.save()
    } catch(e) {
        console.log(e.message)
    }
}

module.exports = {createSection}