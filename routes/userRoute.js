const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
var bcrypt = require('bcrypt');

router.get("/me", async (req, res) => {
  try {
    res.send("find logged user data here");
  } catch (error) {}
});

router.delete("/delete", (req, res) => {
  res.send(" user delete path");
});

router.post("/register", async (req, res) => {
  try {
    if(await User.findOne({email:req.body.email})){
      res.status(409).send('email already exist')
    }else{
      const user = new User(req.body);
   const hashedPassword =   await bcrypt.hash(user.password, 8);
   user.password=hashedPassword;
   await user.save();
    
    res.status(201).send(user);
    }
    
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/auth", async(req, res) => {
  
  try {
    const user = await User.findOne({email:req.body.email});
    if(!user){
      res.status(400).send("wrong email or password")
    }else{
      const isPasswordValid=await bcrypt.compare(req.body.password, user.password);
      if(isPasswordValid){
       res.send("access granted give me token")
      }else{
        res.send("wrong email or password")
      }
     
    }
   
  } catch (error) {
    res.send(error.message)
  }
 
});

router.post("/addProduct", async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    user.shoppingCart.push({
        name:req.body.name,
        amount:req.body.amount,
        weight:req.body.weight

    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
});

//delete product PATH

module.exports = router;
