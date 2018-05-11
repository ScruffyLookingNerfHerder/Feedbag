import React from "react";
import "./unfavoriteButton.css";

class unfavoriteButton extends React.Component {

  render () {
    return (
      <span className="delete-btn" onClick={this.props.onClick}>
        ✗
      </span>
    );
  }
}

}

export default unfavoriteButton;
