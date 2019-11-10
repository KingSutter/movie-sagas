import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList'
import {
  HashRouter as Router,
  Route, Link,
} from "react-router-dom";
import MovieDetails from '../MovieDetails/MovieDetails';
import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" component={MovieList} />
        <MovieDetails movie={this.props.movie} />
        <Route path="/details" render={(props) => <MovieDetails {...props} movie={this.props.movie}/>} />
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
