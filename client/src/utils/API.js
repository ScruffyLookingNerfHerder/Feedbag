import axios from "axios";

export default {
  // Gets all groceries associated with the logged in user
  getGroceries: function(userid) {
    return axios.get("/api/Groceries/"+ userid +"/");
  },
  // Gets the grocery with the given id
  getGrocery: function(userid, id) {
    return axios.get("/api/Groceries/"+ userid +"/" + id);
  },
  // Deletes the grocery with the given id
  deleteGroceries: function(userid, id) {
    return axios.delete("/api/Groceries/" + userid + "/" + id);
  },
  // Saves a grocery to the database
  saveGroceries: function(userid, Grocery) {
    return axios.post("/api/Groceries/" + userid + "/", Grocery);
  },
  //Gets all the saved recipes from a specific user
  getRecipes: function(userid) {
    return axios.get("/api/Recipes/" + userid + "/");
  },
  //Gets a specific saved recipe by id of the recipe
  getRecipe: function(userid, id) {
    return axios.get("/api/Recipes/"+ userid + "/" + id + "/");
  },
  //Saves a recipe to the user's database
  saveRecipe: function(userid, Recipe) {
    return axios.post("/api/Recipes/" + userid + "/", Recipe);
  },
  //Deletes a recipe from the user's database
  deleteRecipe: function(userid, id) {
    return axios.delete("/api/Recipes/" + userid + "/" + id);
  },
  //Gets all the saved restaurants for the logged in user
  getRestaurants: function(userid) {
    return axios.get("/api/Restaurants/" + userid + "/");
  },
  //Gets the Restaurant with the given id
  getRestaurant: function(userid, id) {
    return axios.get("/api/Restaurants/" + userid + "/" + id);
  },
  //Deletes a Restaurant from the user's favorites
  deleteRestaurant: function( userid, id) {
    return axios.get("/api/Restaurants/" + userid + "/" + id);
  },
  saveRestaurant: function(userid, id){
    return axios.delete("/api/Restaurants/" + userid + "/" + id);
  },

};
