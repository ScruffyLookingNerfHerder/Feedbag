import React, { Component } from 'react';

export default class FacebookLogin extends Component {
  componentDidMount(){
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }
  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);

  }

  facebookLogin = () => {
    if (!this.FB) return;
    this.FB.getLoginStatus(response => {
      if(response.status === 'connected'){
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
      }
    }, );
  }

  facebookLoginHandler = response => {
    if(response.status === 'connected'){
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user:userData
        };
        this.props.onLogin(true, result);
      });
    } else {
      this.props.onLogin(false);
    }
  }
  render() {
    let {children} = this.props;
    return (
      <div onClick = {this.facebookLogin}>
        {children}
        </div>
    );
  }
}
