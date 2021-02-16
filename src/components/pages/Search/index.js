import React, { Component } from 'react'
// import API from "../utils/API"

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
                
            </div>
        )
    }
}
