const express = require("express");
const router = express.Router();
const {
 
  getAllFoods,
} = require("../controller/food-controller");

router.get("/all", getAllFoods);

module.exports = router;
