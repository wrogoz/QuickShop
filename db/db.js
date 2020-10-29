
const mongoose = require('mongoose')


mongoose.connect(`mongodb+srv://wrogoz:downset15@cluster0.rmad5.mongodb.net/quickshop?retryWrites=true&w=majority`, {useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('db connected')
    
  console.log()
});