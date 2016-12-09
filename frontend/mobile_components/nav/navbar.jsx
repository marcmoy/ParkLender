import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav>
        ParkLender
      </nav>
    );
  }
}

export default withRouter(NavBar);
