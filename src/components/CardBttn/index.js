import React from "react";

export default function CardBttn(props) {
    return (     
        <button onClick={props.onClick} 
        className={`card-btn ${props["data-value"]}`} 
        data-value={props["data-value"]} 
      /> 
    )
}