const FOOD2FORK = 'https://food2fork.com/api/search?key='
const APIKey = process.env.FOOD_T0_FORK_API;
const axios = require('axios');

module.exports = {
    Food2forkapi: function(req, res){

      const RecipeQuery = req.params.recipekeywords;
      const url = `${FOOD2FORK}${APIKey}&q=${RecipeQuery}`;

      return axios.get(url)
      .then(response => res.json(response.data))
        console.log(response.data)
      .catch(error => console.error(error));
    }

}
