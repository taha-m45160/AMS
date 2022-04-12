const {createGradebook} = require('../Create/createGradebook')

async function populateGradebook(){

    console.log(`Making 'gradebooks' entries...`)

    await createGradebook('23100000', 1, 'CS-100', 'Fall', 2022, 'Quiz 1', 'A')
    await createGradebook('23100000', 2, 'CS-200', 'Fall', 2022, 'Quiz 2', 'A-')
    await createGradebook('23100000', 1, 'CS-202', 'Spring', 2022, 'Assignment 2', 'B')
    await createGradebook('23100001', 2, 'CS-100', 'Fall', 2022, 'Quiz 2', 'A-')
    await createGradebook('23100001', 1, 'CS-200', 'Fall', 2022, 'Quiz 1', 'A')
    await createGradebook('23100001', 1, 'CS-202', 'Spring', 2022, 'Quiz 1', 'B+')
    await createGradebook('23100002', 1, 'CS-100', 'Fall', 2022, 'Quiz 2', 'C+')
    await createGradebook('23100002', 1, 'CS-200', 'Fall', 2022, 'Quiz 1', 'A-')
    await createGradebook('23100002', 1, 'CS-202', 'Spring', 2022, 'Assignment 2', 'A')
    await createGradebook('23100003', 2, 'CS-100', 'Fall', 2022, 'Assignment 2', 'C')
    await createGradebook('23100003', 1, 'CS-202', 'Spring', 2022, 'Assignment 2', 'D')
    await createGradebook('23100003', 1, 'CS-535', 'Fall', 2022, 'Quiz 2', 'A')
    await createGradebook('23100019', 1, 'CS-535', 'Fall', 2022, 'Quiz 1', 'A')
}

module.exports = {populateGradebook}