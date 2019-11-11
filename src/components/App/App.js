import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import {connect} from 'react-redux';

// import components
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import Edit from '../Edit/Edit'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MovieList} />
          <Route exact path="/MovieDetails" component={MovieDetails} />
          <Route exact path="/Edit" component={Edit} />
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
