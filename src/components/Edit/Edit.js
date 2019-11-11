import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
    state = {
        titleIn: '',
        descripionIn: '',
        genres: [],
    }
    componentDidMount(){
        this.getGenresByID();
    }

    //changes title
    handleTitleChange = (event) => {
        this.setState({
            titleIn: event.target.value,
        });
    }

    // changes description
    handleDescriptionChange = (event) => {
        this.setState({
            descripionIn: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let editedMovie = this.props.movie;
        editedMovie.title = this.state.titleIn;
        editedMovie.description = this.state.descripionIn;
        this.props.dispatch({type: 'POST_MOVIE', payload: editedMovie})
        this.props.history.path('/details');
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

    render(){
        return (
            <div>
                <form onSubmit={this.handeSubmit}>
                    <input onChange={this.handleTitleChange} type="text" placeholder="title"/>
                    <input onChange={this.handleDescriptionChange} type="text" placeholder="description"/>
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
                <button onClick={()=>{this.props.history.push('/MovieDetails')}}>Cancel</button>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
                <ul>
                    {this.state.genres.map((genre)=>(
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {movie: reduxState.movieDetails, genres: reduxState.genres};
}

export default withRouter(connect(mapReduxStateToProps)(Edit));