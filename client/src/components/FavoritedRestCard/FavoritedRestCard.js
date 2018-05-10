import React from "react";

const FavoritedRestCard = props => (
  <div className="card">
    <div className="content">
      <p><strong>Name: </strong> {props.name}</p>
      <p>Address: {props.address}</p>
      <p>
      <a href={props.websiteURL}>Website</a></p>
    </div>
  </div>
)

export default FavoritedRestCard
