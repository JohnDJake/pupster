import React from "react";
import "./style.css";

function SearchResultCard(props) {

  return (
        <div className="card">
        <div className="img-container">
          <img alt="dog photo" className="img-fluid" src={props.result}  />
        </div>
      </div>

    )
  }

export default SearchResultCard;