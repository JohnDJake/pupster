import React from "react";
import SearchResultCard from "../SearchResultCard"

function SearchResultContainer(props) {
  const list = props.results || [];
  return (
    <div>{list.map( result => <SearchResultCard result={result}/>)}
    </div>

  )
}

export default SearchResultContainer
