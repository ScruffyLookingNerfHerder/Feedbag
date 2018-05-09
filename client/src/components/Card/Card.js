import React from "react";


const Card = props => (
    <div className={props.shadow ? "card" : "card card-no-shadow"}>
        <div className="card-content">
            <span className="card-title">{props.cardTitle}</span>
            {props.cardContent}
        </div>
    </div>
)

export default Card;
