import React from 'react';

class FeaturedCities extends React.Component {
  constructor(props) {
    super(props);
    this.renderCities = this.renderCities.bind(this);
  }

  renderCities() {
    let cities = [];
    for (let city in CITY_PICS) {
      if (city) {
        cities.push(
          <li>
            <div className='overflow'>
              <img src={CITY_PICS[city]} />
              <label>{city}</label>
            </div>
          </li>
        );
      }
    }
    return cities;
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className='featured-cities-container'>
        <ul>
          {this.renderCities()}
        </ul>
      </div>
    );
  }
}

const CITY_PICS = {
  'San Francisco': 'http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_600/v1475554446/featured_cities/sf.jpg',
  'New York': 'http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_600/v1475554428/featured_cities/ny.jpg',
  'Seattle': 'http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_600/v1475554436/featured_cities/seattle.jpg',
  'Chicago': 'http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_600/v1475554446/featured_cities/chicago.jpg',
  'Los Angeles': 'http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_600/v1475554449/featured_cities/los-angeles.jpg',
  'Boston': 'http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_600/v1475554449/featured_cities/boston.jpg'
};

export default FeaturedCities;
