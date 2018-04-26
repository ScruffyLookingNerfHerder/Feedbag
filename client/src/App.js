import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from 'react-facebook-login';
import FacebookLoginButton from './components/FacebookLoginButton';




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   responseFacebook(response) {
//     console.log(response)
//   }
//   render() {
//     return (
//       <FacebookLogin
//         appId = "218987942202868"
//         autoLoad = {true}
//         fields = "name, email, picture"
//         callback = {this.responseFacebook}
//         />
//     )
//   }
// }

class App extends Component {
  state = {
    username: null
  };
  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true){
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { username } = this.state;
    return (
      <div className = "App">
        <header className = "App-header">
          <h1 className = "App-title"> React Social Media Login </h1>
          </header>
        <div className = "App-intro">
        { !username &&
          <div>
            <p> Click one of the buttons below to login </p>
            <FacebookLoginButton onLogin = {this.onFacebookLogin}>
            <button>Facebook</button>
            </FacebookLoginButton>
          </div>

          }
          {username &&
            <p> Welcome back, {username} </p>
          }
          </div>
      </div>
    );
  }

}



export default App;
