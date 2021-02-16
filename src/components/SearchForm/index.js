import React from "react";

function SearchForm(props){
    return(
    <form className="search">
        <div className="form-group">
            <input type="text" 
            className="form-control" 
            id="breed" 
            placeholder="Golden Retriever" 
            onChange={props.handleInputChange} 
            value={props.search} 
            name="breed"/>
            <button type="submit" 
            onClick={props.handleFormSubmit} 
            className="btn btn-success">Search!</button>
        </div>
    </form>
    )
}

export default SearchForm;