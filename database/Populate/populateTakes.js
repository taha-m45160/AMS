const {createTakes} = require('../Create/createTakes')

async function populateTakes (){
    
    await createTakes('23100000', 1, 'CS-100', 'Fall', 2022)
    await createTakes('23100000', 2, 'CS-200', 'Fall', 2022)
    await createTakes('23100000', 1, 'CS-202', 'Spring', 2022)

    await createTakes('23100001', 2, 'CS-100', 'Fall', 2022)
    await createTakes('23100001', 1, 'CS-200', 'Fall', 2022)
    await createTakes('23100001', 1, 'CS-202', 'Spring', 2022)

    await createTakes('23100002', 1, 'CS-100', 'Fall', 2022)
    await createTakes('23100002', 1, 'CS-200', 'Fall', 2022)
    await createTakes('23100002', 1, 'CS-202', 'Spring', 2022)
    
    await createTakes('23100003', 2, 'CS-100', 'Fall', 2022)
    await createTakes('23100003', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100003', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100004', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100004', 2, 'CS-368', 'Fall', 2022)
    await createTakes('23100004', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100005', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100005', 1, 'CS-368', 'Fall', 2022)
    await createTakes('23100005', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100006', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100006', 2, 'CS-368', 'Fall', 2022)
    await createTakes('23100006', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100007', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100007', 1, 'CS-368', 'Fall', 2022)
    await createTakes('23100007', 1, 'CS-535', 'Fall', 2022)
    
    await createTakes('23100008', 1, 'CS-368', 'Fall', 2022)
    await createTakes('23100008', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100009', 2, 'CS-368', 'Fall', 2022)
    await createTakes('23100009', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100010', 1, 'CS-368', 'Fall', 2022)
    await createTakes('23100010', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100011', 2, 'CS-368', 'Fall', 2022)
    await createTakes('23100011', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100012', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100012', 1, 'CS-368', 'Spring', 2022)
    await createTakes('23100012', 1, 'CS-535', 'Fall', 2022)

    await createTakes('23100013', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100013', 2, 'CS-368', 'Spring', 2022)

    await createTakes('23100014', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100014', 1, 'CS-368', 'Spring', 2022)

    await createTakes('23100015', 1, 'CS-202', 'Spring', 2022)
    await createTakes('23100015', 2, 'CS-368', 'Spring', 2022)
        
    await createTakes('23100016', 1, 'CS-535', 'Fall', 2022)
    await createTakes('23100016', 1, 'CS-202', 'Spring', 2022)
    
    await createTakes('23100017', 1, 'CS-535', 'Fall', 2022)
    await createTakes('23100017', 1, 'CS-202', 'Spring', 2022)
    
    await createTakes('23100018', 1, 'CS-535', 'Fall', 2022)
    await createTakes('23100018', 1, 'CS-202', 'Spring', 2022)
    
    await createTakes('23100019', 1, 'CS-535', 'Fall', 2022)
    await createTakes('23100019', 1, 'CS-202', 'Spring', 2022)

}

module.exports = {populateTakes}