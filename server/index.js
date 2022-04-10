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
const {enroll} = require('./rest_apis/admin/enroll')
const {changePassword} = require('./rest_apis/admin/changePassword')

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

app.post('/admin/changePassword', (authenticateUser), async (req, res) => {
    await changePassword(req, res)
})

app.post('/admin/enroll', (authenticateUser), async (req, res) => {
    enroll(req, res)
})

app.get('./logout', (req, res) => {
    res.cookie('jwt', '', {maxAge:1})
    res.status(200).send()
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})