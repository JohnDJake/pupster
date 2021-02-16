import React, { Component } from 'react'
import API from "../../../utils/API"
import SearchForm from "../../SearchForm"
import SearchResultContainer from "../../SearchResultContainer"

export default class Search extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount(){
        API.search("labrador")
        .then(res=> this.setState({results: res.data.message}))
        .catch(err=> console.log(err))
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event =>{
        event.preventDefault();
        API.search(this.state.search)
        .then(res=>{this.setState({results: res.data.message})})
        .catch(err => this.setState({ error: err.message }));
    }

    render() {
        return (
            <div>
                <h3>Search for your favorite dog breed:</h3>
                <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
                <SearchResultContainer results={this.state.results}/>
            </div>
        )
    }
}
