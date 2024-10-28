const express = require('express')
const authRoute = require('./routes/authRoute')
const app = express()


app.use('/',authRoute)

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('server on ' ,port))
