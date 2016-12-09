//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import MobileRoot from './mobile_components/root';
//Actions
import configureStore from './store/store';
import Modal from 'react-modal';

let height = window.screen.height;
let width = window.screen.width;

document.addEventListener('DOMContentLoaded', () => {

  const orgError = console.error; // eslint-disable-line no-console
   console.error = (message) => { // eslint-disable-line no-console
     if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
       // Log the error as normally
       orgError.apply(console, [message]);
     }
   };

  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = window.Store = configureStore(initialState);
  } else {
    store = window.Store = configureStore();
  }

  const root = document.getElementById('root');
  Modal.setAppElement(root);

  if (height < 800 && width < 500) {
    ReactDOM.render(<MobileRoot store={store}/>, root);
  } else {
    ReactDOM.render(<Root store={store}/>, root);
  }
});
