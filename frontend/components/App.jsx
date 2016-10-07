import React from 'react';
import NavBar from './nav/nav_container';
import AlertContainer from 'react-alert';

const alertOptionsTop = {
  offset: 14,
  position: 'top right',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
};

const alertOptionsBottom = {
  offset: 14,
  position: 'bottom right',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
};

const showDemoAlert = () => {
  msgTop.show('DEMO STARTED!', {
    time: 3000,
    type: 'success'
  });
};

const App = ({children}) => (
  <div>
    <header>
      <NavBar showDemoAlert={showDemoAlert}/>
    </header>
    {children}
    <AlertContainer ref= {(a) => global.msgTop = a } {...alertOptionsTop} />
    <AlertContainer ref= {(a) => global.msgBot = a } {...alertOptionsBottom} />
  </div>
);

export default App;
