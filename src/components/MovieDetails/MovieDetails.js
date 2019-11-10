import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component {
    render() {
        return (
            <>
            <div>
                <button onClick={()=>{this.props.history.push('/')}}>Back to List</button>
                <button onClick={()=>{this.props.history.push('/Edit')}}>Edit</button>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
            </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    // return {movies: reduxState.moviesReducer}
    return {movie: reduxState.movieDetails};
  }


export default connect(mapStateToProps)(MovieDetails);