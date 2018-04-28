import React from "react";

const VenCard = props => (

  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">
      <p><strong>Name:</strong> {props.name}</p>

      { props.location ? (
        <p><strong>Address:</strong>{props.location.address}</p>
      ) : (
        <p><strong>Address:</strong> No Address Available </p>
      )}

      { props.hours ? (
        <p><strong>Hours:</strong>{props.hours.status}</p>
      ) : (
        <p><strong>Hours:</strong>No Info Available </p>
      )}

      { props.contact ? (
        <p><strong>Contact:</strong>{props.contact.phone}</p>
      ) : (
        <p><strong>Contact:</strong>No Info Available </p>
      )}

      <p><strong>Link:</strong>{props.url}</p>

    </div>
  </div>
);

export default VenCard;


// // <p><strong>Website:</strong> {props.links}</p>
//
// { props.links ? (
//   <p><strong>Delivery:</strong> {props.links.url}</p>
// ) : (
//   <p>No Website Available</p>
// )}
