const express = require("express");
const router = express.Router();
const {
  getAllFoods,
  getAllSingleFood,
} = require("../controller/food-controller");

router.get("/all", getAllFoods);
router.route("/:id").get(getAllSingleFood);

module.exports = router;
