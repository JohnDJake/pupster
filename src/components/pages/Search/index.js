import React, { Component } from 'react'
import API from "../utils/API"
import SearchForm from "..components/SearchForm"

export default class Search extends Component {
    state = {
        search: "",
        results: [],
        breeds: []
    }

    componentDidMount(){
        API.search("labrador")
        .then(res=> this.setState({breeds: res.data.message}))
        .catch(err=> console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Search for your favorite dog breed:</h1>
                <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        )
    }
}
