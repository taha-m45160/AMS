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
const {whoami} = require('./rest_apis/whoami')
const {changePasswordGeneral} = require('./rest_apis/changePasswordGeneral')

// admin
const {createAccount} = require('./rest_apis/admin/createAccount')
const {changePassword} = require('./rest_apis/admin/changePassword')
const {create_course} = require('./rest_apis/admin/createCourse')
const {getCourses} = require('./rest_apis/admin/getCourses')
const {create_announcement} = require('./rest_apis/admin/createAnnouncement')
const {create_section} = require('./rest_apis/admin/createSection')
const {enroll} = require('./rest_apis/admin/enroll')
const {getAdmins} = require('./rest_apis/admin/getAdmins')
const {getEnrolled} = require('./rest_apis/admin/getEnrolled')
const {getParents} = require('./rest_apis/admin/getParents')
const {getStudents} = require('./rest_apis/admin/getStudents')
const {getTeachers} = require('./rest_apis/admin/getTeachers')
const {getUser} = require('./rest_apis/admin/getUser')
const {getSections} = require('./rest_apis/admin/getSections')

// student
const {getCoursesStudents} = require('./rest_apis/students/getCoursesStudents')
const {getCourseDetailsStudents} = require('./rest_apis/students/getCourseDetails')
const {getResourcesStudents} = require('./rest_apis/students/getResources')
const {getQuizzesStudents} = require('./rest_apis/students/getQuizzes')
const {getAssignmentsStudents} = require('./rest_apis/students/getAssignment')

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

app.get('/whoami', (authenticateUser), async (req, res) => {
    await whoami(req, res)
})

app.post('/changePassword', (authenticateUser), async (req, res) => {
    await changePasswordGeneral(req, res)
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

app.post('/admin/createAnnouncement', (authenticateUser), async (req, res) => {
    await create_announcement(req, res)
})

app.post('/admin/createSection', (authenticateUser), async (req, res) => {
    await create_section(req, res)
})

app.post('/admin/enroll', (authenticateUser), async (req, res) => {
    await enroll(req, res)
})

app.get('/admin/getAdmins', (authenticateUser), async (req, res) => {
    await getAdmins(req, res)
})

app.get('/admin/getParents', (authenticateUser), async (req, res) => {
    await getParents(req, res)
})

app.get('/admin/getTeachers', (authenticateUser), async (req, res) => {
    await getTeachers(req, res)
})

app.get('/admin/getStudents', (authenticateUser), async (req, res) => {
    await getStudents(req, res)
})

app.post('/admin/getUser', (authenticateUser), async (req, res) => {
    await getUser(req, res)
})

app.post('/admin/getEnrolled', (authenticateUser), async (req, res) => {
    await getEnrolled(req, res)
})

app.post('/admin/sections', (authenticateUser), async (req, res) => {
    await getSections(req, res)
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

// Students

app.get('/students/courses', (authenticateUser), async (req,res) => {
    await getCoursesStudents(req, res)
})

app.post('/students/getCourseDetails', (authenticateUser), async (req, res) => {
    await getCourseDetailsStudents(req, res)
})

app.post('/students/getResources', (authenticateUser), async (req, res) => {
    await getResourcesStudents(req, res)
})

app.post('/students/getQuizzes', (authenticateUser), async (req, res) => {
    await getQuizzesStudents(req, res)
})

app.post('/students/getAssignments', (authenticateUser), async (req, res) => {
    await getAssignmentsStudents(req, res)
})


// general

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