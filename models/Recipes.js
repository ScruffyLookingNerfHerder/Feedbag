const mongoose = require ('mongoose');

let Schema = mongoose.Schema;

const RecipeSchema = new mongoose.Schema({
title: String,
href: String,
ingredients: String,
thumbnail: String,
User:{
  type: Schema.Types.ObjectId, ref: "users"
}
});


const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe
