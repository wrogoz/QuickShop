const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const auth = require("../middleware/auth");
const {
  getUserData,
  registerUser,
  loginUser,
  addProduct,
  deleteUser,
  removeProduct,
} = require("../controllers/userControllers");

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.body.user.id);
    res.send(user);
  } catch (error) {
    
    console.log(error.message)
    console.log(error)
    res.status(500).send({ error: "no user found" });
  }});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/delete", auth, deleteUser);

router.patch("/addProduct", auth, addProduct);

router.patch("/removeProduct", auth, removeProduct);

module.exports = router;
