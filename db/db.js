
const mongoose = require('mongoose')


mongoose.connect(`${process.env.URI}`, {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('db connected')
    
  console.log()
});