import React from "react";

const VenCard = props => (

  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">


    { props.img ? (
      <div>
        <img src={ props.img } alt="img"/>
      </div>
    ) : (
      <p><strong>No image available </strong> </p>
    )}

      <p><strong>Name:</strong> { props.name }</p>

      { props.price ? (
        <p><strong>Price Tier: </strong>{ props.price.tier }</p>
      ) : (
        <p><strong>Price Tier: </strong> No Info Available </p>
      )}

      { props.location ? (
        <p><strong>Address:</strong>{ props.location.address }</p>
      ) : (
        <p><strong>Address:</strong> No Info Available </p>
      )}

      { props.hours ? (
        <p><strong>Hours:</strong>{ props.hours.status }</p>
      ) : (
        <p><strong>Hours:</strong>No Info Available </p>
      )}

      { props.contact ? (
        <p><strong>Contact:</strong>{ props.contact.phone }</p>
      ) : (
        <p><strong>Contact:</strong>No Info Available </p>
      )}

      <p><a href={ props.url }><strong>Link</strong></a></p>

    </div>
  </div>
);

export default VenCard;
