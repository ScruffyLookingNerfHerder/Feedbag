// import "../../App.css";
import React, { Component } from "react";
import API from "../../API"
import Wrapper from "../../components/Wrapper";
import RestCard from "../../components/RestCard";
import VenCard from "../../components/VenCard";
import ResultButton from "../../components/ResultButton";
import VenResultButton from "../../components/VenResultButton";
import RecipeCard from "../../components/RecipeCard";
import RecResultButton from "../../components/RecResultButton";
import { Link } from 'react-router-dom';
import { withUser } from '../../services/withUser';
import axios from "axios";
import scraper from '../../utils/scraper'

class SearchPage extends Component {

  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }
    console.log(this.props.user);
      axios.get('/api/Restaurants/' + this.props.user.id)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });

    axios.get('/api/Ingredients/35119')
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
  }


state = {
  venues: [],
  recipes: [],
  singleVen: undefined,
  loSearch: "arlington va",
  restSearch: "burger",
  showRestInfo: true
}

 handleInputChange = event => {
   const { name, value } = event.target;
   this.setState({
     [name]: value
   });
 };

 handleTru = event => {
   if (this.state.showRestInfo === true) {
     this.setState({ showRestInfo: false })
   }

  else if (this.state.showRestInfo === false && this.state.singleVen !== undefined) {
    this.setState({ showRestInfo: false })
  }
 }

// ===================

  loadRest = event => {

    event.preventDefault();

      API.getRest(this.state.loSearch, this.state.restSearch)
      .then(res => {
        this.setState({ venues: res.data.response.venues })
      })
      .catch(err => console.log(err));

        this.setState({ singleVen: undefined })
        this.loadRecipe();
  }

  loadVen = event => {
    let id = event.currentTarget.id;

      event.persist();
        event.preventDefault();
          this.handleTru();

    API.getVenue(id)
    .then(res => {
      console.log(res.data.response.venue)
      this.setState({ singleVen: res.data.response.venue })
    })
    .catch(err => console.log(err));
  }

  loadRecipe = event => {

    API.getRec(this.state.restSearch)
    .then(res => {
      console.log(res)

      const canscrape =["All Recipes","Closet Cooking", "101 Cookbooks", "BBC Good Food", "The Pioneer Woman", "Bon Appetit", "Jamie Oliver", "BBC Food", "Epicurious", "Tasty Kitchen", "Cookstr", "Simply Recipes"]
      const filteredrecs = res.data.recipes.filter(recipe => canscrape.includes(recipe.publisher))
      console.log(filteredrecs)
      this.setState({ recipes: filteredrecs })
    })
    .catch(err => console.log(err));

  }
// =======================
  renderRestCard = () => {

    let renderRestCard = this.state.venues.map(restaurant => (
      <ResultButton
      key={restaurant.id}
      id={restaurant.id}
      clicked={this.showRestInfo}
      clickVenueBtn={this.loadVen}
      clickHandleTru={this.handleTru}
      >
      {RestCard(restaurant)}
      </ResultButton>
    ))
    return renderRestCard;
  }

  renderVenCard = () => {

    if (this.state.singleVen !== undefined) {
      let imgPre = "https://igx.4sqi.net/img/general/width960"
      let imgSuf = this.state.singleVen.photos.groups[0].items[0].suffix;

      let singleVenObj = this.state.singleVen;
        let renderVenObj = {
              key: singleVenObj.id,
              id: singleVenObj.id,
              name: singleVenObj.name,
              hours: singleVenObj.hours,
              location: singleVenObj.location,
              phone: singleVenObj.contact,
              url: singleVenObj.url,
              img: imgPre + imgSuf
        }
            return (
                <VenResultButton
                key={renderVenObj.id}
                id={renderVenObj.id}
                clicked={this.showRestInfo}
                clickHandleTru={this.handleTru}
                >
                {VenCard(renderVenObj)}
                </VenResultButton>
              )
    }
  }

  renderRecCard = () => {
    let f2fingredients
    let renderRestCard = this.state.recipes.map(recipe => (

    axios.get('/api/Ingredients/' + recipe.recipe_id)
    .then(res =>{
      recipe.ingredients = res.data.ingredients

      console.log(recipe)
    })
    .catch(err =>{
      console.log(err)
    }),
      <RecResultButton
        key={recipe.title}
        id={recipe.title}
        href={recipe.source_url}
        ingredients = {recipe.ingredients}
        >
        {RecipeCard(recipe)}
        </RecResultButton>
      ))
    return renderRestCard;
  }

  // =====================

  render () {

  if (this.state.showRestInfo === true) {
    return (
  <Wrapper>

    <p> hello world </p>
    <p> <Link to="/"> Click Here </Link> to go back to the home page! </p>
    <input
      name="loSearch"
      value={this.state.loSearch}
      onChange={this.handleInputChange}
      placeholder="Location Search"
      />
    <input
      name="restSearch"
      value={this.state.restSearch}
      onChange={this.handleInputChange}
      placeholder="Restaurant Search"
      />
    <button
      onClick={this.loadRest}
      type="success"
      >
      Search
    </button>

        { this.renderRestCard() }
        { this.renderRecCard() }

    </Wrapper>
    )
  }
  else {

    return (
      <Wrapper>

        <p> hello world </p>
        <input
          name="loSearch"
          value={this.state.loSearch}
          onChange={this.handleInputChange}
          placeholder="Location Search"
          />
        <input
          name="restSearch"
          value={this.state.restSearch}
          onChange={this.handleInputChange}
          placeholder="Restaurant Search"
          />
        <button
          onClick={this.loadRest}
          type="success"
          >
          Search
        </button>

            { this.renderRestCard() }
            { this.renderRecCard() }
            { this.renderVenCard() }

      </Wrapper>
    )
  }
  }
}

export default SearchPage;
