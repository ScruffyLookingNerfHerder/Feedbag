import React from "react";

const FavoritedRecipeCard = props => (
  <div className="card">
    <div className="content">
      <p><strong>Recipe: </strong> {props.title}</p>
      <p></p>
      <p>
      Click to see Recipe!</p>
    </div>
  </div>
)

export default FavoritedRecipeCard
