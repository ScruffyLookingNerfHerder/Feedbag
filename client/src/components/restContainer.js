import React, { Component } from "react";
import axios from "axios";
import restCall from "./restaurantCall";
import API from "./API"


class restContainer extends Component {

  state= {
    restaurant: undefined,
    location: undefined,
    address: undefined,
    rating: undefined
  }


  getRest = async (e) => {
    e.preventDefault();
    const restaurant = e.target.elements.restaurant.value;
    const location = e.target.elements.location.value;
    const address = e.target.address.value;
    const rating = e.target.rating.value;

    const api_call = await axios('&appid=${API_KEY}')
    const data = await api_call
    console.log(data)
  }
}

export default restContainer;
