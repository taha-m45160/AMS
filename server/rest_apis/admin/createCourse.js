const mongoose = require("mongoose")
const {createCourse} = require('../../database/Create/createCourse')

async function create_course(req, res){
    try{
        const ccode = sanitize(req.body.ccode)
        const ctitle = sanitize(req.body.ctitle)
        await createCourse(ccode, ctitle)
        res.status(200).send('Course successfully created.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {create_course}