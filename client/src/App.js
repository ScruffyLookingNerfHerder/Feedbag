import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import restContainer from "./components/restContainer";
import API from "./API"
import Wrapper from "./components/Wrapper";
import RestCard from "./components/RestCard";
import ResultButton from "./components/ResultButton";

class App extends Component {

state = {
  venues: [],
  singleVen: [],
  loSearch: "",
  restSearch: ""
}

  // componentDidMount() {
  //   this.loadRest();
  // }

  handleInputChange = event => {
   const { name, value } = event.target;
   this.setState({
     [name]: value
   });
 };

 // handleClick = id => {
 //   this.setState({
 //     [id]: this.id
 //   }).then(loadVen({id}))
 // }

  loadRest = event => {

    event.preventDefault();

    API.getRest(this.state.loSearch, this.state.restSearch)
    .then(res => { this.setState({ venues: res.data.response.venues })
    })
    .catch(err => console.log(err));

    API.getRest(this.state.loSearch, this.state.restSearch)
    .then(res => console.log(res.data.response))
// this.setState({ venues: res.data.response.venues })
  }

  loadVen = event => {

    let id = event.target.id;
    console.log(id)
    console.log(`id ${id} was clicked`)

    API.getVenue(id)
    .then(res => { this.setState({ singleVen: res.data.response.venue })
    })
    .catch(err => console.log(err));

    API.getVenue(id)
    .then(res => console.log(res.data.response.venue))

  }

  render () {
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

    {this.state.venues.map(restaurant => (
      <ResultButton
      key={restaurant.id}
      id={restaurant.id}
      clickVenueBtn={this.loadVen}
      >
      <RestCard
        id={restaurant.id}
        name={restaurant.name}
        location={restaurant.location.address}
        url={restaurant.url}
        delivery={restaurant.delivery}
        />
      </ResultButton>
    ))}
    </Wrapper>
    )
  }
}

export default App;

//make a button component called "buttonResult or something. render the rest card inside of it. "
