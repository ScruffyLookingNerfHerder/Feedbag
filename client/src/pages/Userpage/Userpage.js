import React, { Component } from "react";
import { withUser } from '../../services/withUser';
import axios from "axios";
import AuthFailedPage from "../AuthFailedPage"

class Userpage extends Component {

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
    }

render() {
    const { user } = this.props; // get the user prop from props


    return (
      <div>
        <p> Welcome {user.username}! </p>
      </div>
    )
  }
}

export default withUser(Userpage);
