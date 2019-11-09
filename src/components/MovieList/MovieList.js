import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (reduxState) => {
    // return {movies: reduxState.moviesReducer}
    return reduxState;
}

class MovieList extends Component {
    componentDidMount() {
        // gets movies from database
        this.props.dispatch({type: 'GET_MOVIES'})
    }

    render() {
        return (
            <>
                {this.props.movies.map((movie) => (
                    <img src={movie.poster} alt={movie.title} />
                    
                ))}
            </>
        )
    }
}

export default connect(mapStateToProps)(MovieList);