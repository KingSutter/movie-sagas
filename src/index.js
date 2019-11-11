import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga stuff
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// Import axios
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMoviesSaga);
    yield takeEvery('POST_MOVIE', postMovieSaga);
    yield takeEvery('GET_GENRES', getGenreSaga);
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* getMoviesSaga(action) {
    try {
      console.log("getting movies")
      const moviesResponse = yield axios.get('/movies');
      console.log(moviesResponse);
      yield put({ type: 'SET_MOVIES', payload: moviesResponse.data })
    } catch (error) {
      console.log('error fetching movies', error);  
    }
  }

function* postMovieSaga(action){
    try{
        yield axios.post('/movies', action.payload);
        yield put({ type: 'GET_MOVIES'});
    } catch(error) {
        console.log('error editing movies', error); 
        
    }
}

function* getGenreSaga(action){
    try{
        const genresResponse = yield axios.get(`/movies/genres/`)
        yield put({ type: 'SET_GENRES', payload: genresResponse.data })
    }catch(error){
        console.log('error getting genre', error);
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log(action.payload);
            
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store clicked on movie
const movieDetails = (state = {}, action) => {
    if (action.type === "PUSH_DETAILS"){
        return action.payload;
    }
    return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
