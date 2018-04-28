import React from "react";

const RestDetails = props => (
      <div className="mov-container">
        <p>Restaurant: { this.props.name } </p>
        <p>Location: { this.props.location } </p>
        <p>Address: { this.props.address } </p>
        <p>Rating: { this.props.rating } </p>
      </div>
);


export default RestDetails;
