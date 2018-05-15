import React from "react";
import "./ResultButton.css"

const ResultButton = props => (


  <button className="rest" id={ props.id } onClick={ props.clickVenueBtn }> <div className="buttonRules">{ props.children }  </div>
   </button>

);

export default ResultButton;
