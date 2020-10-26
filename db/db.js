
const mongoose = require('mongoose')


mongoose.connect(`mongodb+srv://wrogoz:${process.env.DBPASS}@cluster0.rmad5.mongodb.net/quickshop?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('db connected')
    
  console.log()
});