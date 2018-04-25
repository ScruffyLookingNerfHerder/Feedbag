import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from 'react-facebook-login';




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

class App extends React.Component {
  responseFacebook(response) {
    console.log(response)
  }
  render() {
    return (
      <FacebookLogin
        appId = "218987942202868"
        autoLoad = {true}
        fields = "name, email, picture"
        callback = {this.responseFacebook}
        />
    )
  }
}

export default App;
