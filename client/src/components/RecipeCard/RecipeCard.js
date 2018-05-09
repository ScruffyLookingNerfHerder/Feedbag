import React from "react";
import favorite from "../favorite";
import { Link } from "react-router-dom";

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
      <div className="card-action">
               {props.favoriterecipes?  <Link to="#" glyph="star" onClick={() => props.favoriterecipes(props.RecipeTitle, props.RecipeDate, props.RecipeUrl)}> <i className="material-icons tiny">bookmark</i> Favorite </Link> : null}
               {props.unfavoriterecipes ?  <Link to="#" glyph ="star-empty" onClick={() => props.unfavoriterecipes(props.RecipeId)}> <i className="material-icons tiny">delete</i> Unfavorite </Link> : null}
           </div>
       </div>
    </div>
);

export default RecipeCard;
