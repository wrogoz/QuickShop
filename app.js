const express = require('express')
const app=express()
const db = require('./db/db')
const helmet = require("helmet")
const setHeaders = require('./middleware/setHeaders')
const user = require('./routes/userRoute')

app.use(helmet())
app.use( setHeaders)
app.use(express.json())
app.use('/user',user)

const port = 8000;





app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});