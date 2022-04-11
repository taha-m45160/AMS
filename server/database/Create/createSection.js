const Section = require('../Schema/Section.js')

async function createSection(ID, c_id, term, year) {
    const section = await Section.create({
        ID: ID,
        course_ID: c_id,
        term: term,
        year: year
    })
    await section.save()
}

module.exports = {createSection}