import React from 'react';
import NavBar from './nav/nav_container';

const App = ({children}) => (
  <div>
    <header>
      <NavBar />
    </header>
    {children}
  </div>
);

export default App;
