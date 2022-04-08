const User = require('../Schema/User')

async function createUser(id, f_name, m_name='', l_name, email, role, password, students=[]) {
    const user = await User.create({
        ID: id,
        name: {
            first: f_name,
            middle: m_name,
            last: l_name
        },
        email: email,
        role: role,
        password: password,
        students: students
    })
    await user.save()
}

module.exports = {createUser}