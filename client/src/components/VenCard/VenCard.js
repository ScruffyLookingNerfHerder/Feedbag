import React from "react";

const VenCard = props => (

  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">

    <div>
      <img src={ props.img } alt="img"/>
    </div>

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

      <p><a href={props.url}><strong>Link</strong></a></p>

    </div>
  </div>
);

export default VenCard;
