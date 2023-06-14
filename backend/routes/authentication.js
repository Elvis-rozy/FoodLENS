const express = require("express");
const router = express.Router();
const unathenticateUser = require("../middleware/authentication");

const {
  registerUser,
  login,
  updateUserInfo,
} = require("../controller/authentication");

router.post("/register", registerUser);
router.post("/login", login);
router.patch("/updateUser", unathenticateUser, updateUserInfo);
module.exports = router;
