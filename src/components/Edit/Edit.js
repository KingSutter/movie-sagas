import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class Edit extends Component {
    state = {
        titleIn: '',
        descripionIn: '',
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
        {/* <pre>{JSON.stringify(this.props.movie,null,2)}</pre> */}
        <pre>{JSON.stringify(this.state,null,2)}</pre>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {movie: reduxState.movieDetails};
}

export default withRouter(connect(mapReduxStateToProps)(Edit));