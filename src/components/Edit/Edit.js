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

    render(){
        return (
            <div>
                <form onSubmit={this.handeSubmit}>
                    <input onChange={this.handleTitleChange} type="text" placeholder="title"/>
                    <input onChange={this.handleDescriptionChange} type="text" placeholder="description"/>
                    <button type="submit">Submit</button>
                </form>
            <button onClick={()=>{this.props.history.push('/MovieDetails')}}>Cancel</button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {movie: reduxState.movieDetails};
}

export default withRouter(connect(mapReduxStateToProps)(Edit));