import React, { Component } from 'react';
import API from '../../../utils/API';

export default class Discover extends Component {
    state = { image: "", friends: 0 };

    componentDidMount() {
        this.getNewPup();
    }

    getNewPup() {
        API.random().then(({ data: { message } }) => this.setState({ image: message }));
    }

    // event handler function for thumbs up, increments friends 20% of the time
    // thumbs down will just call getNewPup() so we can use that as the event handler
    handleThumbsUp = event => {
        if (Math.random() >= 0.8) this.setState({ friends: this.state.friends + 1 });
        this.getNewPup();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Make New Friends</h1>
                </div>
                <div className="row justify-content-center">
                    <h3>Thumbs up on any pups you'd like to meet!</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-m-8 col-l-6 col-xl-4">
                        <div className="card">
                            <img src={this.state.image} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
