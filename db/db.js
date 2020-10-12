const keys = require('../config/keys/keys')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true});



// mongoose.connect(`mongodb+srv://wrogoz:${keys.dbPass}@cluster0.rmad5.mongodb.net/quickshop?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true})
// .then(()=>{
//     console.log('db connected')
// });