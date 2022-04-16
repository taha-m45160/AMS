const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {authenticateUser} = require('./auth.js')
const {connect} = require('./util')
const uri = "mongodb+srv://mutahar789:Hello0985@ams.qh2kz.mongodb.net/AMS?retryWrites=true&w=majority"
connect(uri);

// rest apis
const {login} = require('./rest_apis/login')
const {getAnnouncements} = require('./rest_apis/getAnnouncements')

// admin
const {createAccount} = require('./rest_apis/admin/createAccount')
const {changePassword} = require('./rest_apis/admin/changePassword')
const {create_course} = require('./rest_apis/admin/createCourse')
const {getCourses} = require('./rest_apis/admin/getCourses')

const {viewAnnouncements} = require('./rest_apis/parent/viewAnnouncements')
const {viewStudents} = require('./rest_apis/parent/viewStudents')
const {viewTakes} = require('./rest_apis/parent/viewTakes')
const {viewOverview} = require('./rest_apis/parent/viewOverview')
const {viewGradebook} = require('./rest_apis/parent/viewGradebook')

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(cookieParser())
const corsConfig = {
    origin: true,
    credentials: true
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig));

app.post('/login', async (req, res) => {
    await login(req, res)
})

app.get('/getAnnouncements', (authenticateUser), async (req, res) => {
    await getAnnouncements(req, res)
})

// Admin

app.post('/admin/changePassword', (authenticateUser), async (req, res) => {
    await changePassword(req, res)
})

app.post('/admin/createAccount', (authenticateUser), async (req, res) => {
    await createAccount(req, res)
})

app.post('/admin/createCourse', (authenticateUser), async (req, res) => {
    await create_course(req, res)
})

app.get('/admin/courses', (authenticateUser), async (req, res) => {
    await getCourses(req, res)
})


// Parents

app.post('/parent/students', (authenticateUser), async (req,res) => {
    await viewStudents(req, res)
})

app.post('/parent/studentTakes', (authenticateUser), async (req,res) => {
    await viewTakes(req, res)
})

app.post('/parent/course/overview', (authenticateUser), async (req,res) => {
    await viewOverview(req, res)
})

app.post('/parent/course/gradebook', (authenticateUser), async (req,res) => {
    await viewGradebook(req, res)
})

// Teachers



app.get('/logout', (req, res) => {
    res.cookie('jwt', '', {maxAge:1})
    res.status(200).send()
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})