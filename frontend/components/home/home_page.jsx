import React from 'react';
import Slideshow from './slideshow';
import FeaturedCities from './featured_cities';
import Footer from '../footer/footer';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className='push-up'>
        <Slideshow updateMap={this.props.updateMap}/>
        <FeaturedCities updateMap={this.props.updateMap}/>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
