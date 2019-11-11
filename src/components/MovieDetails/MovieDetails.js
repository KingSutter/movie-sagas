import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieDetails extends Component {
    componentDidMount(){
        this.getGenresByID();
    }
    // gets all genres based on movie ID
    getGenresByID = () => {
        let genresByID = [];
        this.props.genres.forEach(genre => {
            if(this.props.movie.id == genre.id){
                genresByID.push(genre.name)
            }
        });
        this.setState({genres: genresByID})
    }

    render() {
        return (
            <>
            <div>
                <button onClick={()=>{this.props.history.push('/')}}>Back to List</button>
                <button onClick={()=>{this.props.history.push('/Edit')}}>Edit</button>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
                {JSON.stringify(this.props.genres,null,2)}
            </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    // return {movies: reduxState.moviesReducer}
    return {movie: reduxState.movieDetails, genres: reduxState.genres};
  }


export default connect(mapStateToProps)(MovieDetails);