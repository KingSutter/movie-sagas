import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <>
            <button onClick={()=>{this.props.history.push('/')}}>Back to List</button>
            <h1>{this.props.movie.title}</h1>
            <p>{this.props.movie.description}</p>
            </>
        )
    }
}

export default MovieDetails;