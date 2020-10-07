const express = require('express');
const app=express();
const db = require('./db/db');
const user = require('./routes/userRoute');

app.use(express.json())

const port = 3000;



app.use('/user',user);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});