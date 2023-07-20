const Food = require("../model/Food");
const UserFood = require("../model/UserFood");
const { StatusCodes } = require("http-status-codes");
const User = require("../model/User");
const { BadrequestError, NotFound } = require("../errors");

//all food items controller
const getAllFoods = async (req, res) => {
  const {
    search,
    filter,
    food_name,
    brand_name,
    ingredients,
    calories,
    cuisine,
    allergenInfo,
    intoleranceInfo,
    category,
    group,
    sort,
  } = req.query;
  const queryObj = {};
  //filtering by any property
  if (brand_name) {
    queryObj.brand_name = brand_name;
  }

  if (category) {
    queryObj.category = category;
  }
  if (group) {
    queryObj.group = group;
  }
  if (cuisine) {
    queryObj.cuisine = cuisine;
  }

//filtering by gruop
 if (filter) {
   const filtered = filter.split(",");
    queryObj.group = filtered;
 }


  //searching
  if (search) {
    queryObj.food_name = { $regex: search, $options: "i" };
  }
 // if (search) {
 //   queryObj.brand_name = { $regex: search, $options: "i" };
 // }
 // if (search) {
 //   queryObj.group = { $regex: search, $options: "i" };
 // }

 // if (search) {
 //   queryObj.category = { $regex: search, $options: "i" };
 // }

  let result = Food.find(queryObj);

  //sorting
  // if (sort === "a-z") {
  //   result = result.sort("calories");
  // }
  // if (sort === "z-a") {
  //   result = result.sort("-calories");
  //  }

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  //pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const endIndex = page * limit;

  result = result.skip(skip).limit(limit);

  const totalCount = await Food.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const foods = await result;

  res.status(StatusCodes.CREATED).json({ foods, totalCount, numOfPages });
};
//general single food
const getAllSingleFood = async (req, res) => {
  const {
    params: { id: foodId },
  } = req;

  const food = await Food.findOne({ _id: foodId});
  if (!food) {
    throw new BadrequestError(`No food with id ${foodId}`);
  }
  res.status(StatusCodes.OK).json({ food });
};


// user food item controllers
const getAllFoodsByUser = async (req, res) => {
  const {
    search,
    filter,
    food_name,
    brand_name,
    ingredients,
    calories,
    cuisine,
    allergenInfo,
    intoleranceInfo,
    category,
    group,
    sort,
  } = req.query;
  const queryObj = { createdBy: req.user.userId };
  //filtering by any properties
  if (brand_name) {
    queryObj.brand_name = brand_name;
  }

  if (category) {
    queryObj.category = category;
  }
  if (group) {
    queryObj.group = group;
  }
  if (cuisine) {
    queryObj.cuisine = cuisine;
  }

//filtering by group

 if (filter) {
   const filtered = filter.split(",");
   queryObj.group = filtered;
 }

  //searching
  if (search) {
    queryObj.food_name = { $regex: search, $options: "i" };
  }
  // if (search) {
  //   queryObj.brand_name = { $regex: search, $options: "i" };
  // }
  // if (search) {
  //   queryObj.group = { $regex: search, $options: "i" };
  // }

  //if (search) {
  //  queryObj.cuisine = { $regex: search, $options: "i" };
  // }

  let result = UserFood.find(queryObj);

  //sorting
  // if (sort === "a-z") {
  //   result = result.sort("calories");
  // }
  // if (sort === "z-a") {
  //   result = result.sort("-calories");
  //  }
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  //pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  const endIndex = page * limit;

  result = result.skip(skip).limit(limit);

  const totalCount = await UserFood.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const foods = await result;

  res.status(StatusCodes.CREATED).json({ foods, totalCount, numOfPages });
};

const createFood = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const foods = await UserFood.create({...req.body });

  res.status(StatusCodes.CREATED).json({ foods });
};

const getSingleFood = async (req, res) => {
  const {
    user: { userId },
    params: { id: foodId },
  } = req;

  const food = await UserFood.findOne({ _id: foodId, createdBy: userId });
  if (!food) {
    throw new BadrequestError(`No food with id ${foodId}`);
  }
  res.status(StatusCodes.OK).json({ food });
};

const deleteFood = async (req, res) => {
  const {
    user: { userId },
    params: { id: foodId },
  } = req;
  const food = await UserFood.findByIdAndRemove({
    _id: foodId,
    createdBy: userId,
  });
  res.status(StatusCodes.ACCEPTED).json("item deleted successfully");
  if (!food) {
    throw new NotFound(`No food with id ${foodId}`);
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  createFood,
  getAllFoods,
  getAllSingleFood,
  getAllFoodsByUser,
  getSingleFood,
  deleteFood,
};
