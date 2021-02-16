import React, { Component } from 'react';
import API from '../../../utils/API';

export default class Discover extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Make New Friends</h1>
                <h3 className="text-center">Thumbs up on any pups you'd like to meet!</h3>
                <div className="card">
                    <img src={API.random()} className="card-img" />
                </div>
            </div>
        )
    }
}
