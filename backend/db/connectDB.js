const mongoose = require("mongoose");

const connectdb = async (url) => {
  return await mongoose.connect(url).then(() => {
    console.log("connect to db");
  });
};

module.exports = connectdb;
