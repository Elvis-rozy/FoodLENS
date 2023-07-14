const User = require("../model/User");
const { BadrequestError, Unathenticated } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const registerUser = async (req, res) => {
  console.log(req.body);
  const user = await User.create({ ...req.body });
  const token = await user.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      username: user.username,
      diet: user.diet,
      intolerance: user.intolerance,
      allergies: user.allergies,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadrequestError("Please Provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new Unathenticated("You are not a user,Invalid email address");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new Unathenticated(
      "Password is in correct,Please Provide correct password"
    );
  }
  const token = await user.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      userPicture: user.userPicture,
      email: user.email,
      username: user.username,
      diet: user.diet,
      intolerance: user.intolerance,
      allergies: user.allergies,
      token,
    },
  });
};

const updateUserInfo = async (req, res) => {
  const { email, diet, allergies, intolerance, age, username, userPicture } =
    req.body;

  let user = await User.findOne({ _id: req.user.userId });
  console.log(req.user);
  user.email = email;
  user.diet = diet;
  user.allergies = allergies;
  user.intolerance = intolerance;
  user.username = username;
  user.userPicture = userPicture;

  console.log(user);
  await user.save();
  const token = await user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      userPicture: user.userPicture,
      email: user.email,
      username: user.username,
      diet: user.diet,
      intolerance: user.intolerance,
      allergies: user.allergies,
      token,
    },
  });
};

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const token = await user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      userPicture: user.userPicture,
      email: user.email,
      username: user.username,
      diet: user.diet,
      intolerance: user.intolerance,
      allergies: user.allergies,
      token,
    },
  });
};

module.exports = { registerUser, login, updateUserInfo, getUser };
