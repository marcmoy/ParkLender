//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
//Actions
import configureStore from './store/store';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = window.Store = configureStore(initialState);
  } else {
    store = window.Store = configureStore();
  }

  const root = document.getElementById('root');
  Modal.setAppElement(root);
  ReactDOM.render(<Root store={store}/>, root);
});
