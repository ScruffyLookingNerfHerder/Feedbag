import React, { Component } from "react";
import { withUser } from '../../services/withUser';
import axios from "axios";
import AuthFailedPage from "../AuthFailedPage";
import SiteNav from "../../components/SiteNav";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Circle from "../../components/Carousel"
import RestCard from "../../components/RestCard"
import FavoritedRestCard from "../../components/FavoritedRestCard"
import Wrapper from "../../components/Wrapper"
import ResultButton from "../../components/ResultButton"
import API from "../../utils/API"

class RestaurantsPage extends Component {

componentDidMount() {
// only try loading stuff if the user is logged in.
if (!this.props.user) {
      return;
    }

      console.log(this.props.user);
        API.getRestaurants(this.props.user.id)
          .then(res => {
            this.setState({restaurants: res.data})
            console.log(res.data)
          })
          .catch(err => {
            console.log(err);
          });

  }

state ={
  restaurants: []
}

renderCards = () => {

  let renderCards = this.state.restaurants.map(restaurant => (
    <a href= {`/restaurants/${this.props.user.id}/${restaurant._id}`}>
    <ResultButton
      key= {restaurant.id}

      id={restaurant.id}
      >
    {FavoritedRestCard(restaurant)}
    < /ResultButton>
    </a>
  ))
  return renderCards
}


render() {
    const { user } = this.props; // get the user prop from props

  
    return (
      <Wrapper>
      <div className = "container">
        <Jumbotron />
        <SiteNav />

      </div>

        {this.renderCards()}

      </Wrapper>

    )
  }
}

export default RestaurantsPage;
