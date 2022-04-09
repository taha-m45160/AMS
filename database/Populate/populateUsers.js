const {createUser} = require('../Create/createUser')
const {readFileLineByLine} = require('./util')
const crypto = require('crypto');


async function getName(boy_names, girl_names){
    return new Promise((resolve, reject) => {
        const thresh = Math.random();
        let f_name;
        if(thresh>0.5){
            f_name = boy_names[Math.floor(Math.random() * boy_names.length)];
        }
        else{
            f_name = girl_names[Math.floor(Math.random() * girl_names.length)];
        }
        const l_name = boy_names[Math.floor(Math.random() * boy_names.length)];
        const name = [f_name, l_name]
        resolve (name)
    })        
}

async function populateUsers(){
    const boy_names = await readFileLineByLine('./Populate/Data/boy_names.txt')
    const girl_names = await readFileLineByLine('./Populate/Data/girl_names.txt')

    console.log(`Making 'users' entries...`)
    await createUser(23100126, 'Mutahar', undefined, 'Ali', 'mutahar.ali@gmail.com', 'Admin', 'admin123')
    await createUser(23100088, 'Samee', undefined, 'Arif', 'samee.arif@gmail.com', 'Admin', 'admin123')
    await createUser(23100086, 'Faizan', undefined, 'Elahi', 'fazian.elahi@gmail.com', 'Admin', 'admin123')
    await createUser(23100091, 'Muhammad', 'Bilal', 'Shahid', 'bilal.shahid@gmail.com', 'Admin', 'admin123')
    await createUser(23100107, 'Muhammmad', undefined, 'Taha', 'm.taha_popman@gmail.com', 'Admin', 'admin123')
    
    let users = {}

    const roles = ['Student', 'Parent', 'Teacher']
    qty = {'Student': 99, 'Teacher': 25, 'Parent': 99}

    for(i=0; i<3; i++){
        let role = roles[i];
        users[role] = []
        let pwd = `${role.toLowerCase()}123`
        let hash = crypto.createHash('sha256').update(pwd).digest('hex');
        for(j=0; j<qty[role]; j++){
            let user = {}
            user['id'] = 24100000+i*100+(j+1)
            let name = await getName(boy_names, girl_names)
            user['f_name'] = name[0]
            user['l_name'] = name[1]
            user['email'] = `${user.f_name}.${user.l_name}@gmail.com`
            user['role'] = role
            user['students'] = undefined
            if(role === 'Parent'){
                user['students'] = [users['Student'][i]]
            }
            // users[role].push(user)
            await createUser(user.id, user.f_name, undefined, user.l_name, user.email, user.role, hash, user.students)
        }
    }
}

module.exports = {populateUsers}
