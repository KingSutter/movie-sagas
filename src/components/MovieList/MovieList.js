import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MovieList extends Component {
    componentDidMount() {
        // gets movies from database
        this.props.dispatch({type: 'GET_MOVIES'})
    }

    render() {
        return (
            <>
                {JSON.stringify(this.props,null,2)}
            </>
        )
    }
}

export default connect(mapStateToProps)(MovieList);