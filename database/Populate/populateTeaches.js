const {createTeaches} = require('../Create/createTeaches')

async function populateTeaches (){
    
    await createTeaches('urwa.hassan', 1, 'CS-100', 'Fall', 2022)
    await createTeaches('urwa.hassan', 1, 'CS-200', 'Fall', 2022)
    await createTeaches('mahira.khan', 2, 'CS-100', 'Fall', 2022)
    await createTeaches('mahira.khan', 2, 'CS-200', 'Fall', 2022)
    await createTeaches('hassan.raza', 1, 'CS-202', 'Spring', 2022)
    await createTeaches('raheela.sharif', 1, 'CS-202', 'Spring', 2022)
    await createTeaches('hassan.raza', 1, 'CS-535', 'Fall', 2022)
    await createTeaches('mursal.akhtar', 1, 'CS-368', 'Spring', 2022)
    await createTeaches('mursal.akhtar', 2, 'CS-368', 'Spring', 2022)
}

module.exports = {populateTeaches}