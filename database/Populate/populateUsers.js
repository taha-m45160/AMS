const {createUser} = require('../Create/createUser')
const crypto = require('crypto');

async function populateUsers(){

    console.log(`Making 'users' entries...`)
    await createUser('mutahar.ali', 'Mutahar', undefined, 'Ali', 'mutahar.ali@gmail.com', 'Admin', 'admin123')
    await createUser('samee.arif', 'Samee', undefined, 'Arif', 'samee.arif@gmail.com', 'Admin', 'admin123')
    await createUser('faizan.elahi', 'Faizan', undefined, 'Elahi', 'fazian.elahi@gmail.com', 'Admin', 'admin123')
    await createUser('bilal.shahid', 'Muhammad', 'Bilal', 'Shahid', 'bilal.shahid@gmail.com', 'Admin', 'admin123')
    await createUser('m.taha', 'Muhammmad', undefined, 'Taha', 'm.taha@gmail.com', 'Admin', 'admin123')
}

module.exports = {populateUsers}
