//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
import {requestSpots} from './actions/spots_actions';
import {updateFilter} from './actions/filter_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = window.Store = configureStore(initialState);
  } else {
    store = window.Store = configureStore();
  }

  window.updateFilter = updateFilter;
  window.requestSpots = requestSpots;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
