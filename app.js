const express = require('express')
require('dotenv').config()
const app=express()
const db = require('./db/db')
const helmet = require("helmet")

const setHeaders = require('./middleware/setHeaders')
const user = require('./routes/userRoute')
const cors = require("cors")
app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('quickshop app documentation test')
  })


const port = process.env.PORT || 8000;





app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
});