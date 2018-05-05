const FOOD2FORK = 'https://food2fork.com/api/search?key='
const APIKey = process.env.FOOD_T0_FORK_API;
const axios = require('axios');
const request = require('request')
const cheerio = require('cheerio')

module.exports = {
    Food2forkapi: function(req, res){

      const RecipeQuery = req.params.recipekeywords;
      const url = `${FOOD2FORK}${APIKey}&q=${RecipeQuery}`;

      return axios.get(url)
      .then(response => res.json(response.data))
        console.log(response.data)
      .catch(error => console.error(error));
    },
    Food2forkIngredients: function(req, res){
      const IngredientsQuery = "http://food2fork.com/view/" + req.params.id
      console.log(IngredientsQuery)
      return axios.get(IngredientsQuery)
      .then((response) =>{
        let $ = cheerio.load(response.data);
        let ingredients = {
          ingredients:[]
        };
        $(".span5.offset1.about-container li").each(function(i, element){
          let ingredient = $(element).text();
          ingredients.push(ingredient)
        })
        console.log(ingredients)

      })
      res.json(ingredients)
    }

}

// function Food2forkIngredients(req, res){
//   const IngredientsQuery = "http://food2fork.com/view/" + "47998"
//   console.log(IngredientsQuery)
//   return axios.get(IngredientsQuery)
//   .then((response) =>{
//
//     let $ = cheerio.load(response.data);
//     let ingredients = {
//       ingredients:[]
//     };
//     $(".span5.offset1.about-container li").each(function(i, element){
//       let ingredient = $(element).text();
//       ingredients.ingredients.push(ingredient)
//     })
//     console.log("Ingredients: ", ingredients)
//
//   })
//   res.json(ingredients)
// }
// Food2forkIngredients();
