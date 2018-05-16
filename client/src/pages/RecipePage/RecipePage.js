import React, { Component } from "react";
import { withUser } from '../../services/withUser';
import axios from "axios";
import AuthFailedPage from "../AuthFailedPage";
import SiteNav from "../../components/SiteNav";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API"

class Userpage extends Component {

state = {
  Recipe: {}
}

componentDidMount() {
// only try loading stuff if the user is logged in.
if (!this.props.user) {
      return;
    }
      console.log(this.props.user);
        API.getRecipe(this.props.user.id, this.props.match.params.id)
          .then(res => {
            this.setState({Recipe: res.data})
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });

    }

render() {
    const { user } = this.props; // get the user prop from props


    return (
      <div className = "container">
        <Jumbotron />
        <SiteNav />

      <h1> This is the page for {this.state.Recipe.title}</h1>
      <a href="/recipes"> Click here to go back to your favorite recipes!</a>

      </div>
    )
  }
}

export default withUser(Userpage);
