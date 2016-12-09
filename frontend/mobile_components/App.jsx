import React from 'react';
import NavBar from './nav/nav_container';

const App = ({children}) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default App;
