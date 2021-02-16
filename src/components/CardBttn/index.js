import React from "react";
import "./style.css";

export default function CardBttn(props) {
    return (     
        <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} data-value={props["data-value"]}>{props.children}</button> 
    )
}