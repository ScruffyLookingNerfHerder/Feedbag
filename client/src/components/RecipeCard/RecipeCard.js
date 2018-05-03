import React from "react";

const RecipeCard = props => (

  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">
      <p><strong>Title:</strong> { props.title }</p>
        <div>
          <img src={ props.image_url } alt="img"/>
        </div>
      <p> <strong>Ingredients:</strong>{ props.ingredients } </p>
      <a href={ props.source_url }>Link</a>
    </div>
  </div>
);

export default RecipeCard;
