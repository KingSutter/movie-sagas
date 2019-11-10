import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route, Link,
} from "react-router-dom";
import {connect} from 'react-redux';

// import components
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MovieList} />
          <Route exact path="/details" render={(props) => <MovieDetails {...props} movie={this.props.movie}/>} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  // return {movies: reduxState.moviesReducer}
  return {movie: reduxState.movieDetails};
}

export default connect(mapStateToProps)(App);
