import React from "react";

const RestCard = props => (

  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Address:</strong> {props.location}</p>

      { props.delivery ? (
        <p><strong>Delivery:</strong> Yes </p>
      ) : (
        <p><strong>Delivery:</strong> No </p>
      )}
    </div>
  </div>
);

export default RestCard;


// // <p><strong>Website:</strong> {props.links}</p>
//
// { props.links ? (
//   <p><strong>Delivery:</strong> {props.links.url}</p>
// ) : (
//   <p>No Website Available</p>
// )}
