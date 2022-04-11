const mongoose = require("mongoose")
const {createCourse} = require('../../database/Create/createCourse')

async function create_course(req, res){
    try{
        await createCourse(req.body.ccode, req.body.ctitle)
        res.status(200).send('Course successfully created.')
    } catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {create_course}