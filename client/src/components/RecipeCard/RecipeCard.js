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
      <p>
        <strong>Get the Ingredients! </strong>
          <a href={ props.source_url }>Link</a>
      </p>
    </div>
  </div>
);

export default RecipeCard;
