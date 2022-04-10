const {createUser} = require('../Create/createUser')
const crypto = require('crypto');

async function populateUsers(){

    console.log(`Making 'users' entries...`)
    await createUser(0001, 'Mutahar', undefined, 'Ali', 'mutahar.ali@gmail.com', 'Admin', 'admin123')
    await createUser(0002, 'Samee', undefined, 'Arif', 'samee.arif@gmail.com', 'Admin', 'admin123')
    await createUser(0003, 'Faizan', undefined, 'Elahi', 'fazian.elahi@gmail.com', 'Admin', 'admin123')
    await createUser(0004, 'Muhammad', 'Bilal', 'Shahid', 'bilal.shahid@gmail.com', 'Admin', 'admin123')
    await createUser(0005, 'Muhammmad', undefined, 'Taha', 'm.taha_popman@gmail.com', 'Admin', 'admin123')
    
}

module.exports = {populateUsers}
