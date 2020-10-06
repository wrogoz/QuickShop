const mongoose = require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
  },
  weight: {
    type: String,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique:true,
    required: true,
    trim: true,
    minlength: 5,
    
  },
  password:{
    type:String,
    required:true,
    minlength:5
  },
  shoppingCart: {
      type:[productSchema],
      default:Array
      
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
