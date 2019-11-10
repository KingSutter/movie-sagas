import React, { Component } from 'react';
import {connect} from 'react-redux';

class Edit extends Component {
    state = {
        titleIn: '',
        descripionIn: '',
    }
    handleTitleChange = (event) => {
        this.setState({
            titleIn: event.target.value,
        });
    }
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
            <pre>{JSON.stringify(this.state,null,2)}</pre>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {movie: reduxState.movieDetails};
}

export default connect(mapReduxStateToProps)(Edit);