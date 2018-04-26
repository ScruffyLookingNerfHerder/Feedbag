import React from "react";

const ResultButton = props => (

  <button id={ props.id } onClick={ props.clickVenueBtn }> { props.children } </button>
);

export default ResultButton;
