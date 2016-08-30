import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './router.jsx';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default Root;
