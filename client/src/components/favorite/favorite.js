import React, { Component } from "react";
import API from "../../utils/API";
import RecipeCard from "../RecipeCard";
import RestCard from "../RestCard";
import RecResultButton from "../RecResultButton";
import ResultButton from "../ResultButton";
import Card from "../Card";



class Favorite extends Component {
  // sets the initial values
  state = {
    recipes: [],
    restaurants: []
  };

  // loads recipes and restaurants
  componentDidMount() {
    this.loadrecipes();
    this.loadrestaurants();
  }



  // loads favorited recipes
  loadrecipes = () => {
    API.getrecipes()
      .then(res => this.setState({
        recipes: res.data
      }))
      .catch(err => console.log(err));
  };
  // loads favorited restaurants
  loadrestaurants = () => {
    API.getrestaurants()
      .then(res => this.setState({
        restaurants: res.data
      }))
      .catch(err => console.log(err));
  };

  // displays search results
  favoriterecipes = () => {
      let renderfavoriterecipes= this.state.recipes.map(recipes => (
        // <div className="recipes-grid row">

            <RecResultButton>
            key = {
              RecipeCard.title
            }
            id = {
              RecipeCard.title
            }
            href = {
              RecipeCard.source_url
            } >
            {
              RecipeCard(RecipeCard)
            }
            </RecResultButton>
          ))
          return renderfavoriterecipes;
};

favoriterestaurants = () => {
let renderRestCard = this.state.venues.map(restaurant => (

  <ResultButton>
   key = {
    restaurant.id
  }
  id = {
    restaurant.id
  }
  clicked = {
    this.showRestInfo
  }
  clickVenueBtn = {
    this.loadVen
  }
  clickHandleTru = {
    this.handleTru
  } >
  {
    RestCard(restaurant)
  }

  </ResultButton>
))
return renderRestCard;
};


// unfavorite Recipes
unfavoriterecipes = id => {
  API.unfavoriterecipes(id)
    .then(res => this.loadrecipes())
    .catch(err => console.log(err));
};

// unfavorite Recipes
unfavoriterestaurants = id => {
  API.unfavoriterestaurants(id)
    .then(res => this.loadrestaurants())
    .catch(err => console.log(err));
};


render() {
  return ( <
    div > {
      this.state.recipes.length ? < Card shadow = {
        false
      }
      cardTitle = "Favorite Recipes"
      cardContent = {
        this.savedrecipes()
      }
      /> : <Card cardTitle="No favorite recipes to display" / >
    } <
    /div>
  );
};

render() {
  return ( <
    div > {
      this.state.restaurants.length ? < Card shadow = {
        false
      }
      cardTitle = "Favorite Recipes"
      cardContent = {
        this.savedrestaurants()
      }
      /> : <Card cardTitle="No favorite restaurants to display" / >
    } <
    /div>
  );
};
}

export default Favorite;
