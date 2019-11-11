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
        if (this.state.titleIn === '' && this.state.descripionIn === ''){
            alert('Please enter text into either of the fields')
        }else{
            let editedMovie = this.props.movie;
            editedMovie.title = this.state.titleIn;
            editedMovie.description = this.state.descripionIn;
            this.props.dispatch({type: 'POST_MOVIE', payload: editedMovie})
            this.props.history.push('/details');
        }
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
                    <input onChange={this.handleTitleChange} type="text" placeholder="title" required/>
                    <input onChange={this.handleDescriptionChange} type="text" placeholder="description" required/>
                    <button onClick={this.handleSubmit}>Save</button>
                    <button onClick={()=>{this.props.history.push('/details')}}>Cancel</button>
                </form>
        
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