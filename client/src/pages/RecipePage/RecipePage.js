import React, { Component } from "react";
import { withUser } from '../../services/withUser';
import axios from "axios";
import AuthFailedPage from "../AuthFailedPage";
import SiteNav from "../../components/SiteNav";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API"

class Userpage extends Component {

constructor(props){
  super(props);
}

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

getIngredients = (id) => {
  API.getIngredients(id)
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    });
}

getSteps = (publisher, url) => {
  API.getSteps(publisher, url)
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    });
}



render() {
    const { user } = this.props; // get the user prop from props
    

    return (
      <div className = "container">
        <Jumbotron />
        <SiteNav />
      <img src= {this.state.Recipe.image}></img>
      <h1>{this.state.Recipe.title}</h1>
      <a href="/recipes"> Click here to go back to your favorite recipes!</a>
      <button onClick={this.getIngredients(this.state.Recipe.id)}> Ingredients</button>
      <button onClick={this.getSteps(this.state.Recipe.publisher, this.state.Recipe.source_url)}>Steps</button>


      </div>
    )
  }
}

export default Userpage;
