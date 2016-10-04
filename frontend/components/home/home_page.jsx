import React from 'react';
import Slideshow from './slideshow';
import HowItWorks from './how_it_works';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Slideshow updateMap={this.props.updateMap}/>
        <HowItWorks />
        <footer>
          Here is the footer
        </footer>
      </div>
    );
  }
}

export default HomePage;
