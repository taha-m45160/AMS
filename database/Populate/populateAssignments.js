const {createAssignment} = require('../Create/createAssignment')
const {readFile} = require('fs').promises

async function populateAssignments(){

    const file = await readFile('./dummy.pdf')
    
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var deadline = new Date(year, month+1, day+3);

    console.log(`Making 'assignments' entries...`)

    await createAssignment('Assignment 1', 1, 'CS-100', 'Fall', 2022, deadline, file)
    await createAssignment('Assignment 1', 2, 'CS-100', 'Fall', 2022, deadline, file)
    await createAssignment('Lab 1', 1, 'CS-200', 'Fall', 2022, deadline, file)
    await createAssignment('Assignment 1', 2, 'CS-200', 'Fall', 2022, deadline)
    await createAssignment('Assignment 1', 1, 'CS-202', 'Spring', 2022, deadline)
    await createAssignment('Assignment 1', 1, 'CS-535', 'Fall', 2022, deadline, file)
    await createAssignment('Routing', 1, 'CS-368', 'Spring', 2022, deadline)
    await createAssignment('Reliability', 2, 'CS-368', 'Spring', 2022, deadline)

    await createAssignment('Assignment 2', 1, 'CS-100', 'Fall', 2022, deadline, file)
    await createAssignment('Lab 2', 2, 'CS-100', 'Fall', 2022, deadline)
    await createAssignment('Assignment 2', 1, 'CS-200', 'Fall', 2022, deadline)
    await createAssignment('Assignment 2', 2, 'CS-200', 'Fall', 2022, deadline)
    await createAssignment('Assignment 2', 1, 'CS-202', 'Spring', 2022, deadline)
    await createAssignment('Assignment 2', 1, 'CS-535', 'Fall', 2022, deadline, file)
    await createAssignment('Chat App', 1, 'CS-368', 'Spring', 2022, deadline, file)
    await createAssignment('TCP and UDP', 2, 'CS-368', 'Spring', 2022, deadline)
}

module.exports = {populateAssignments}