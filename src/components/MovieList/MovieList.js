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
                    <div>
                        <img src={movie.poster} alt={movie.title} />
                        <p>{movie.title}</p>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </>
        )
    }
}

export default connect(mapStateToProps)(MovieList);