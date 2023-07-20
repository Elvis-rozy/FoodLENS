const mongoose = require("mongoose");
const UserFoodSchema = new mongoose.Schema(
  {
    food_name: { type: String },
    brand_name: { type: String },

    serving_qty: { type: Number },
    serving_unit: { type: String },
    serving_weight_grams: { type: Number },
    nutrition_fact: new mongoose.Schema({
      nf_calories: { type: Number },
      nf_total_fat: { type: Number },
      nf_saturated_fat: { type: Number },
      nf_cholesterol: { type: Number },
      nf_sodium: { type: Number },
      nf_total_carbohydrate: { type: Number },
      nf_dietary_fiber: { type: Number },
      nf_sugars: { type: Number },
      nf_protein: { type: Number },
      nf_potassium: { type: Number },
      nf_p: { type: Number },
    }),
    img_url: { type: String },
    video_url: { type: String },
    ingredients: [
      new mongoose.Schema({
        ingredient_name: { type: String },
        serving_qty: { type: Number },
        description: { type: String },
        serving_weight_grams: { type: Number },
        serving_unit: { type: String },
        note: { type: String },
        source: { type: Number },
      }),
    ],
    description: { type: String },
    calories: { type: Number },
    cuisine: { type: String },
    allergenInfo: [String],
    intoleranceInfo: [String],
    category: {
      type: String,
      enum: {
        values: [
          "fruity meals",
          "pastries",
          "starches",
          "fruit",
          "berries",
          "vegetables",
          "greens",
          "legumes",
          "nuts",
          "tubers",
          "grains",
          "honey",
          "dairy",
          "eggs",
          "shellfish",
          "fish",
          "poultry",
          "mutton",
          "venison",
          "pork",
          "beef",
        ],
        message: "{VALUE} is not supported",
      },
    },
    group: {
      type: String,
      enum: {
        values: ["grocery item", "restaurant", "common food", "snack"],
        message: "{VALUE} is not supported",
      },
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserFood", UserFoodSchema);
