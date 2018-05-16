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

class RestaurantPage extends Component {

  state ={
    Restaurant: {}
  }


componentDidMount() {
// only try loading stuff if the user is logged in.
if (!this.props.user) {
      return;
    }
    console.log(this.props)
    API.getRestaurant(this.props.user.id, this.props.match.params.id)
    .then(res => {
      this.setState({ Restaurant: res.data })
      console.log(res.data)
    })
    .catch(err=>console.log(err));
  }




render() {



    return (
      <Wrapper>
      <div className = "container">
        <Jumbotron />
        <SiteNav />

      </div>
      <h1> This is the page for {this.state.Restaurant.name}</h1>
      <a href={`/restaurants/`}> Click Here to Go Back to your favorites </a>


      </Wrapper>

    )
  }
}

export default RestaurantPage;
