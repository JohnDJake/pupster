import React from "react";

function SearchForm(props){
    return(
    <form>
        <div className="form-group">
            <label htmlFor="breed">Dog breed</label>
            <input type="text" className="form-control" id="breed" placeholder="Golden Retriever" onChange={props.handleInputChange} value={props.search} name="breed" list="breeds"/>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search!</button>
        </div>
    </form>
    )
}

export default SearchForm;