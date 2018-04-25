'use strict';
import React from 'react';
import FacebookLogin from 'react-facebook-login';

class AuthComponent extends Component {
  responseFacebook(response) {
    console.log(response);
  }
  render() {
    return (
      <FacebookLogin
        appId = '218987942202868'
        autoLoad = {true}
        fields = "name, email, picture"
        scope = "public_profile, user_friends, user_actions.books"
        callback = {this.responseFacebook}
        />
    )
  }
}

export default AuthComponent;
