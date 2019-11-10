import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
            </>
        )
    }
}

export default MovieDetails;