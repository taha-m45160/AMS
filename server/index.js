const express = require('express')
const fs = require('fs')
const app = express()
const {createHash} = require('crypto')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {createToken, authenticateUser} = require('./auth.js')

// rest apis
const {login} = require('./rest_apis/login')
const {enroll} = require('./rest_apis/enroll')

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(cookieParser())
app.use(cors({
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}))

app.post('/login', async (req, res) => {
    login(req, res)
})

app.post('/admin/enroll', (authenticateUser), async (req, res) => {
    // front end sends hashed password
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