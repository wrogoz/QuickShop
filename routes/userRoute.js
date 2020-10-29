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

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send("wrong email or password");
    } else {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordValid) {
        const token = user.createToken();

        res.send({ token });
      } else {
        res.send("wrong email or password");
      }
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/delete", auth, deleteUser);

router.patch("/addProduct", auth, addProduct);

router.patch("/removeProduct", auth, removeProduct);

module.exports = router;
