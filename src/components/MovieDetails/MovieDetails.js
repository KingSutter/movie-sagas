import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieDetails extends Component {
    state = {
        genres: [],
    }

    componentDidMount(){
        this.getGenresByID();
    }

    // gets all genres based on movie ID
    getGenresByID = () => {
        let genresByID = [];
        this.props.genres.forEach(genre => {
            if(this.props.movie.id === genre.id){
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
                <button onClick={()=>{this.props.history.push('/edit')}}>Edit</button>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
                <ul>
                    {this.state.genres.map((genre)=>(
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {movie: reduxState.movieDetails, genres: reduxState.genres};
  }

export default withRouter(connect(mapStateToProps)(MovieDetails));