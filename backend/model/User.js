const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: 20,
      minlength: 6,
      required: [true, "Please Provide Your username "],
    },
    age: { type: Number },
    dob: { type: Date },
    email: {
      type: String,
      require: [true, "email is required"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },

    gender: {
      type: String,
      enum: { values: ["male", "female"], message: "{VALUE} is not supported" },
    },
    diet: {
      type: String,
      enum: {
        values: [
          "none",
          "vegan",
          "eggetarian",
          "non vegetarian",
          "pescatarian",
          "omnivorous",
          "carnivorous",
          "pollotarian",
          "semi-vegetarian",
          "fruitarian",
          "paleo",
          "ketogenic",
        ],
        message: "{VALUE} is not supported",
      },
      default: "none",
    },
    intolerance: {
      type: [String],
      enum: {
        values: [
          "none",
          "dairy",
          "gluten",
          "caffeine",
          "salicylates",
          "amines",
          "FODMAPs",
          "sulfites",
          "fructose",
          "aspartame",
          "egg",
          "MSG",
          "food coloring",
          "Yeast",
          "Sugar Alcohol",
        ],
        message: "{VALUE} is not supported",
      },
      default: "none",
    },
    allergies: {
      type: [String],
      enum: {
        values: [
          "none",
          "egg",
          "cow milk",
          "tree nut",
          "peanut",
          "shellfish",
          "wheat",
          "soy",
          "fish",
          "chamomile",
          "linseed",
          "sesame seed",
          "peach",
          "banana",
          "avocado",
          "kiwi fruit",
          "passion fruit",
          "celery",
          "garlic",
          "mustard seeds",
          "aniseed",
        ],
        message: "{VALUE} is not supported",
      },
      default: "none",
    },
    password: {
      type: String,
      require: [true, "password is required"],
      minlength: 6,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = async function () {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (inputedPassword) {
  const isMatch = await bcrypt.compare(inputedPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
