const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
require("express-async-errors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const authRoute = require("./routes/authentication");
const foodRoute = require("./routes/food-routes");
const allFoods=require("./routes/all-foods")
const authenticateUser = require("./middleware/authentication");
const connectdb = require("./db/connectDB");
const cors=require('cors')

app.use(express.json());
app.use(cors())
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/foods", authenticateUser, foodRoute);
app.use("/api/v1/all-foods",allFoods)

app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
