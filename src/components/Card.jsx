import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div></div>
            <img src={props.logo} alt={props.name} title={props.name} width="45%" height="45%"></img>
            <h2>{props.name}</h2>
            <p><a href={props.dlink}>Download</a></p>
        </div>
    )
}

export default Card;