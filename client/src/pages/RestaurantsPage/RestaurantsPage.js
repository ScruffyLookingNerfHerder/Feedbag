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

class RestaurantsPage extends Component {

componentDidMount() {
// only try loading stuff if the user is logged in.
if (!this.props.user) {
      return;
    }

      console.log(this.props.user);
        axios.get('/api/Restaurants/' + this.props.user.id)
          .then(res => {
            this.setState({restaurants: res.data})
            console.log(res.data)
          })
          .catch(err => {
            console.log(err);
          });
          axios.get('/api/Recipes' +this.props.user.id)
            .then(res => {
              console.log(res.data);
            }).catch(err => {
              console.log(err);
            })
  }

state ={
  restaurants: []
}

renderCards = () => {

  let renderCards = this.state.restaurants.map(restaurant => (
    <button href= {`/restaurants/${restaurant.name}`}>
    {FavoritedRestCard(restaurant)}
    </button>
  ))
  return renderCards
}


render() {
    const { user } = this.props; // get the user prop from props

    console.log(this.state)
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

export default withUser(RestaurantsPage);
