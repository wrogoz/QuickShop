const express = require('express')
const app=express()

const helmet = require("helmet")
const setHeaders = require('./middleware/setHeaders')
const user = require('./routes/userRoute')
const cors = require("cors")
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(setHeaders)
app.get('/',(req,res)=>{
    res.send('quickshop app documentation')
  })


const port = process.env.PORT ;





app.listen(port, () => {
    console.log(`Server is running on port ${port}!`)
});