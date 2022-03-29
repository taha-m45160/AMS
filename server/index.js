const express = require('express')
const fs = require('fs')
const app = express()
const {createHash} = require('crypto')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {createToken, authenticateStudent, authenticateTeacher, authenticateParent, authenticateAdmin} = require('./auth.js')

const PORT = process.env.PORT || 8000

app.use(express.json())

// Need to ask about dirname path here
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(cookieParser())
app.use(cors({
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}))

const userTypes = ["student", "teacher", "parent", "admin"]

app.post('/login', async (req, res) => {
    try{
        if(userTypes.includes(req.body.userType)){
            // Front end needs to send type of user in variable 'userType' and password in variable 'password', email in variable 'email'.
            
            // query will be made in util.js
            const rows = await query // xyz
            
            const myHash = createHash('sha256').update(req.body.password).digest('hex')
            // assuming rows[0]['password] contains pw stored in db
            if (rows[0]['password'] === myHash){
                const token = createToken(req.body.email+"|"+req.body.userType)
                res.cookie("jwt", token, {httpOnly:true, sameSite:true})
                res.status(200).send()
            }
        }
    }
    catch {
        res.status(401).send()
    }
})

app.post('/admin/enroll/student', (authenticateAdmin), async (req, res) => {
  // student(ID, first_name, middle_name, last_name, email, parent_ID, password)
  
  const myHash = createHash('sha256').update(req.body.password).digest('hex')
  new Promise (async (resolve, reject) => {
    try {
        await db.student.insert({
          _id : req.body.ID,
          first_name:req.body.first_name,
          middle_name:req.body.middle_name,
          last_name:req.body.last_name,
          email: req.body.email,
          parent_ID: req.body.parent_ID,
          password: req.body.password
          
      })
      resolve()

    } catch (err) {
        reject(err)
    }
  })
  .then(() => {
      const token = createToken(req.body.email+"|"+req.body.userType)
      res.cookie('jwt', token, {httpOnly: true, sameSite: true})
      res.status(200).send()
  })
  .catch((err) => {
      res.status(400).send(err)
  })
  
})

app.post('/admin/enroll/teacher', (authenticateAdmin), async (req, res) => {
  // teacher(ID, first_name, middle_name, last_name, email, password)

  const myHash = createHash('sha256').update(req.body.password).digest('hex')
  new Promise (async (resolve, reject) => {
    try {
        await db.teacher.insert({
          _id : req.body.ID,
          first_name:req.body.first_name,
          middle_name:req.body.middle_name,
          last_name:req.body.last_name,
          email: req.body.email,
          password: req.body.password
          
      })
      resolve()

    } catch (err) {
        reject(err)
    }
  })
  .then(() => {
      const token = createToken(req.body.email+"|"+req.body.userType)
      res.cookie('jwt', token, {httpOnly: true, sameSite: true})
      res.status(200).send()
  })
  .catch((err) => {
      res.status(400).send(err)
  })

})

app.post('/admin/enroll/parent', (authenticateAdmin), async (req, res) => {
   // parent(ID, first_name, moddle_name, last_name, email, password)

   const myHash = createHash('sha256').update(req.body.password).digest('hex')
   new Promise (async (resolve, reject) => {
     try {
         await db.parent.insert({
           _id : req.body.ID,
           first_name:req.body.first_name,
           middle_name:req.body.middle_name,
           last_name:req.body.last_name,
           email: req.body.email,
           password: req.body.password
       })
       resolve()
 
     } catch (err) {
         reject(err)
     }
   })
   .then(() => {
       const token = createToken(req.body.email+"|"+req.body.userType)
       res.cookie('jwt', token, {httpOnly: true, sameSite: true})
       res.status(200).send()
   })
   .catch((err) => {
       res.status(400).send(err)
   })
})

app.post('/admin/enroll/admin', (authenticateAdmin), async (req, res) => {
    // admin(ID, first_name, middle_name, last_name, email, password)

    const myHash = createHash('sha256').update(req.body.password).digest('hex')
    new Promise (async (resolve, reject) => {
     try {
         await db.admin.insert({
           _id : req.body.ID,
           first_name:req.body.first_name,
           middle_name:req.body.middle_name,
           last_name:req.body.last_name,
           email: req.body.email,
           password: req.body.password
       })
       resolve()
 
     } catch (err) {
         reject(err)
     }
   })
   .then(() => {
       const token = createToken(req.body.email+"|"+req.body.userType)
       res.cookie('jwt', token, {httpOnly: true, sameSite: true})
       res.status(200).send()
   })
   .catch((err) => {
       res.status(400).send(err)
   })
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