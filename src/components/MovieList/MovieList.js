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

    // sends clicked on movie up to redux state
    goToDetails = (movie) => {
        this.props.dispatch({type: 'PUSH_DETAILS', payload: movie})
    }

    render() {
        return (
            <>
                {this.props.movies.map((movie) => (
                    <div>
                        <img src={movie.poster} alt={movie.title} onClick={()=>{this.goToDetails(movie)}}/>
                        <p>{movie.title}</p>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps)(MovieList));