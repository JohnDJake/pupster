import React from "react";
import "./style.css";

function SearchResultCard(props) {
    const list = props.results || [];
  return (
    list.map(results => (
        <div className="card">
        <div className="img-container">
          <img alt="dog photo" className="img-fluid" src={results}  />
        </div>
      </div>

    ))
  );
}

export default SearchResultCard;