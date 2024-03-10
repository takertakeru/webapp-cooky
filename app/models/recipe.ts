import mongoose, { Schema, models } from "mongoose";
import Users from "./users";

const recipeSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: Users,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  numberOfServing: {
    type: Number,
    required: true,
  },
  preparationTime: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  procedure: {
    type: String,
    required: true,
  },
});

const Recipe = models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;
