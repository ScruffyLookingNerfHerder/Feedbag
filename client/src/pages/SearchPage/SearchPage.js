// import "../../App.css";
import React, {
  Component
} from "react";
import API from "../../API"
import Wrapper from "../../components/Wrapper";
import RestCard from "../../components/RestCard";
import VenCard from "../../components/VenCard";
import ResultButton from "../../components/ResultButton";
import VenResultButton from "../../components/VenResultButton";
import RecipeCard from "../../components/RecipeCard";
import RecResultButton from "../../components/RecResultButton";
import {
  Link
} from 'react-router-dom';
import {
  withUser
} from '../../services/withUser';
import axios from "axios";
import 'rc-checkbox/assets/index.css';
import Checkbox from "rc-checkbox";
import searchOps from "./searchOps.json";
import SiteNav from "../../components/SiteNav";
import Jumbotron from "../../components/Jumbotron";


class SearchPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }
    console.log(this.props.user);
    axios.get('/api/Restaurants/' + this.props.user.id)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      });
    // axios.get('/api/RecipeEXP/' + "schnitzel")
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }


  state = {
    venues: [],
    recipes: [],
    isCuisineSelected: null,
    searchOps,
    singleVen: undefined,
    showRestInfo: true,
    loSearch: "arlington va",
    // resRecSearch: null,
    restSearch: [],
    recSearch: [],
    restResultsFound: 0,
    recResultsFound: 0
  }
  // =====================================

  onChange = e => {
    console.log('Checkbox :', (e.target));
  }

  restConCat = (array) => {
    return array.join(',');
  }

  recConCat = (array) => {
    return array.join('&');
  }

  handleInputChange = event => {
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCuisineSel = event => {

    const eValue = event.target.value;
    const eId = event.target.id;

    let restSearchArr = this.state.restSearch;
    let recSearchArr = this.state.recSearch;
    let removeRestSearchTerm = restSearchArr.filter(restSearchTerm => restSearchTerm !== eValue);
    let removeRecSearchTerm = recSearchArr.filter(recSearchTerm => recSearchTerm != eId);

    if (event.target.checked === true) {
      console.log("set to true")
      restSearchArr.push(eValue);
      recSearchArr.push(eId);
      this.setState({
        restSearch: restSearchArr
      })
      this.setState({
        recSearch: recSearchArr
      })
      console.log(this.state.restSearch)

    } else {
      console.log("set to false")
      this.setState({
        restSearch: removeRestSearchTerm
      })
      this.setState({
        recSearch: removeRecSearchTerm
      })
    }
  }

  handleTruVenRecCard = event => {
    if (this.state.showRestInfo === true) {
      this.setState({
        showRestInfo: false
      })
    } else if (this.state.showRestInfo === false && this.state.singleVen !== undefined) {
      this.setState({
        showRestInfo: false
      })
    }
  }

  // ===================

  submitRecAndRestApi = event => {

    let restSearch = this.state.restSearch;
    let loSearch = this.state.loSearch;

    if (loSearch === undefined || null) {
      this.setState({ loSearch: "Enter a Location!" })
    }

    if (restSearch.length === 0) {
      this.setState({ isCuisineSelected: "Select a Cuisine!"})
    }

    else if (restSearch.length > 0) {
      let joinedRestS = this.restConCat(this.state.restSearch);
      // this.setState({ resRecSearch: joinedRestS})
      // console.log(joinedRestS)
      event.preventDefault();

      API.getRest(this.state.loSearch, joinedRestS)
        .then(res => {
          console.log(res.data.response.venues)
          this.setState({
            venues: res.data.response.venues
          })
          this.setState({
            restResultsFound: this.state.venues.length
          })
          console.log(this.state.restResultsFound)
        })
        .catch(err => console.log(err));

      // if (this.state.restResultsFound == 0) {
      //   this.setState({ restResultsFound: "0 venues found!"})
      // }
      this.setState({ isCuisineSelected: null })
      this.setState({
        singleVen: undefined
      })
      this.loadRecipes();
      joinedRestS = "";
    }
  }

  loadRecipes = () => {

    let joinedRecS = this.recConCat(this.state.recSearch)

    API.getRec(joinedRecS)
      .then(res => {
        console.log(res.data.recipes)
        const canscrape = ["All Recipes", "Closet Cooking", "101 Cookbooks", "BBC Good Food", "The Pioneer Woman", "Bon Appetit", "Jamie Oliver", "BBC Food", "Epicurious", "Tasty Kitchen", "Cookstr", "Simply Recipes"]
        const filteredrecs = res.data.recipes.filter(recipe => canscrape.includes(recipe.publisher))

        this.setState({
          recipes: filteredrecs
        })

        this.setState({
          recResultsFound: this.state.recipes.length
        })
      })
      .catch(err => console.log(err));

    joinedRecS = "";
  }

  loadSingleVenue = event => {
    let id = event.currentTarget.id;
    event.persist();
    event.preventDefault();
    this.handleTruVenRecCard();
    API.getVenue(id)
      .then(res => {
        console.log(res.data.response.venue)
        this.setState({
          singleVen: res.data.response.venue
        })
      })
      .catch(err => console.log(err));
}

// =======================
renderRestCard = () => {
  let renderRestCard = this.state.venues.map(restaurant => (
    <ResultButton key = {
      restaurant.id
    }
    id = {
      restaurant.id
    }
    clicked = {
      this.showRestInfo
    }
    clickVenueBtn = {
      this.loadSingleVenue
    }
    clickHandleTru = {
      this.handleTruVenRecCard
    } >
    {
      RestCard(restaurant)
    }
    < /ResultButton>
  ))
  return renderRestCard;
}

renderVenCard = () => {
  if (this.state.singleVen !== undefined) {

    let singleVenObj = this.state.singleVen;
    let renderVenObj;

    if (this.state.singleVen.photos.groups[0] !== undefined) {
      let imgPre = "https://igx.4sqi.net/img/general/width960"
      let imgSuf = this.state.singleVen.photos.groups[0].items[0].suffix;
      renderVenObj = {
        key: singleVenObj.id,
        id: singleVenObj.id,
        name: singleVenObj.name,
        price: singleVenObj.price,
        hours: singleVenObj.hours,
        location: singleVenObj.location,
        phone: singleVenObj.contact,
        url: singleVenObj.url,
        type: singleVenObj.categories,
        img: imgPre + imgSuf
      }
    } else {
      renderVenObj = {
        key: singleVenObj.id,
        id: singleVenObj.id,
        name: singleVenObj.name,
        price: singleVenObj.price,
        hours: singleVenObj.hours,
        location: singleVenObj.location,
        phone: singleVenObj.contact,
        url: singleVenObj.url,
        type: singleVenObj.categories
      }
    }
    return (
      <div>
      {VenCard(renderVenObj)}
      </div>
    )
  }
}


renderRecCards = () => {
  let renderRestCard = this.state.recipes.map(recipe => (
    {/*
    axios.get('/api/Ingredients/' + recipe.recipe_id)
    .then(res => {
      recipe.ingredients = res.data.ingredients

    })

    .catch(err => {
      console.log(err)
    }),

    axios.get("/api/Steps/" + recipe.publisher + "/?url=" + recipe.source_url)
    .then(res => {
      console.log(res.data)
      recipe.instructions = res.data.instructions

    })
    .catch(err => {
      console.log(err)
    }),
    */},
    <RecResultButton key = {recipe.title}
    id = {recipe.title}
    href = {recipe.source_url}
    ingredients = {recipe.ingredient} >
    {
      RecipeCard(recipe)
    } </RecResultButton>
  ))
  return renderRestCard;
}

renderCuisOp = () => {
  let renderSurvey = this.state.searchOps.map(checkbox => (
    <button >
    <Checkbox key = {checkbox.id}
    id = {checkbox.id}
    name = "cuisineType"
    value = {checkbox.value}
    onChange = {this.onChange}
    onClick = {this.handleCuisineSel} >
    </Checkbox>
    <p> {checkbox.id} </p>
      </button>
  ))
  return renderSurvey;
}

// =====================

render() {
  if (this.state.showRestInfo === true) {
    return ( <
      Wrapper >
      <div className="container">
      <Jumbotron />
      <SiteNav />
      </div>

      <p> <Link to = "/" > Click Here </Link> to go back to the home page! </p>
      <p > Enter your location! </p>
        <input name = "loSearch" value = {this.state.loSearch} onChange = {this.handleInputChange} placeholder = "Location Search" />

    <button onClick = {this.submitRecAndRestApi} type = "success" > Search </button>

    <div >
      <p> Number of Venues Found: {this.state.restResultsFound}</p>
      <p > Number of Recipes Found: {this.state.recResultsFound} </p>
      </div>
      <p> Pick your cuisine! Choose multiple tags to get even more specific results!</p>
      <p>{this.state.isCuisineSelected}</p>
      {this.renderCuisOp()}
      {this.renderRestCard()}
      {this.renderRecCards()}

      </Wrapper>
    )
  } else {
    return (
      <Wrapper >

      <div className="container">
      <Jumbotron />
      <SiteNav />
      </div>

      <p> <Link to = "/" > Click Here < /Link> to go back to the home page! </p >
      <p > Enter your location! </p>
      <input name = "loSearch" value = {this.state.loSearch} onChange = {this.handleInputChange} placeholder = "Location Search" />
      <button onClick = {this.submitRecAndRestApi} type = "success" > Search </button>

    <div >
      <p> Number of Venues Found: {this.state.restResultsFound} </p>
      <p > Number of Recipes Found: {this.state.recResultsFound} </p>
    </div>

      <p> Pick your cuisine!Choose multiple tags to get even more specific results! </p>
      <p>{this.state.isCuisineSelected}</p>
        {this.renderCuisOp()}
        {this.renderRestCard()}
        {this.renderRecCards()}
        {this.renderVenCard()}

    </Wrapper>
    )
  }
}
}

export default SearchPage;
