const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getUserData,
  registerUser,
  loginUser,
  addProduct,
  deleteUser,
  removeProduct,
} = require("../controllers/userControllers");

router.get("/me", auth, getUserData);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/delete", auth, deleteUser);

router.patch("/addProduct", auth, addProduct);

router.patch("/removeProduct", auth, removeProduct);

module.exports = router;
