const jwt = require("jsonwebtoken");
const { Unathenticated } = require("../errors/");

const auth = (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Unathenticated("Invalid Authentication");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes

    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new Unathenticated("Authentication invalid");
  }
};

module.exports = auth;
