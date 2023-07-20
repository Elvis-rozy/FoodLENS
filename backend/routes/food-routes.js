const express = require("express");
const router = express.Router();
const {
  createFood,
 // getAllFoods,
  getAllFoodsByUser,
  deleteFood,
  getSingleFood,
} = require("../controller/food-controller");

router.route("/").post(createFood).get(getAllFoodsByUser);
router.route("/:id").get(getSingleFood).delete(deleteFood);

//router.get("/", getAllFoods);

module.exports = router;
