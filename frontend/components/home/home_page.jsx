import React from 'react';
import Slideshow from './slideshow';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Slideshow updateMap={this.props.updateMap}/>
      </div>
    );
  }
}

export default HomePage;
