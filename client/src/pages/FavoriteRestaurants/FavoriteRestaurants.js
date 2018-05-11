import React, { Component } from "react";
import API from "../../utils/API";
import RestCard from "../RestCard";
import RecResultButton from "../RecResultButton";
import ResultButton from "../ResultButton";
import Card from "../Card";

class FavoriteRestaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRestaurant:[],
    }
  }

  // When the component mounts, load all restaurants and save them to this.state.savedRestaurants
  componentDidMount() {
    this.loadRestaurants();
  }

  // Loads all articles  and sets them to this.state.savedArticles
  loadRestaurants = () => {
    API.getRestaurants()
      .then(res => {
        const restaurants = res.data.map(restaurants => {
          return {
            name: String,
            websiteURL: String,
            address: String,
            photos: String,
            User:{
              type: Schema.Types.ObjectId, ref: "users"
            }
            isSaved: false
          }
        })
        this.setState({savedRestaurants: restaurants});
      }
      )
      .catch(err => console.log(err));
  };

  // Deletes the restaurant from the database with a given id, then reloads restaurants from the db
  deleteRestaurant = id => {
    API.deleteRestaurant(id)
      .then(res => this.loadRestaurants())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Nav articleType="Favorites" />
          <Col size="md-12 sm-12">
               {this.state.savedRestaurants.length ? (
              <List title="Favorited Restaurants">
              {console.log(this.state.savedRestaurants)}
                {this.state.savedRestaurants.map(restaurants => {
                  return (
                    <ListItem key={restaurant.id} id={restaurant.id}
                    clicked={this.showRestInfo}
                    clickVenueBtn={this.loadVen}
                    clickHandleTru={this.handleTru}}>
                      <DeleteBtn onClick={() => this.deleteRestaurant(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Saved Restaurants yet</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FavoriteRestaurants;
