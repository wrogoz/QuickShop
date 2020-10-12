const express = require('express');
const app=express();
const db = require('./db/db');
const user = require('./routes/userRoute');
app.use( (req, res, next)=> {
 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
 
    next();
});
app.use(express.json())

const port = 8000;



app.use('/user',user);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});