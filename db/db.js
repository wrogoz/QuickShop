const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true});