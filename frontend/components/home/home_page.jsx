import React from 'react';
import Slideshow from './slideshow';
import FeaturedCities from './featured_cities';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className='push-up'>
        <Slideshow updateMap={this.props.updateMap}/>
      </div>
    );
  }
}

export default HomePage;
