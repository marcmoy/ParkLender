import React from 'react';
import { withRouter } from 'react-router';
import CITIES from '../../util/cities';
import $ from 'jquery';

class FeaturedCities extends React.Component {
  constructor(props) {
    super(props);
    this.renderCities = this.renderCities.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let name = e.target.attributes.id.value;
    let city = CITIES[name];
    this.props.updateMap(city.center, city.zoom);
    this.props.router.push("/search");
  }

  renderCities() {
    let cities = [];
    for (let city in CITIES) {
      if (city) {
        let name = city.split(' ').join('');
        cities.push(
          <div className='overflow city-pic col-xs-12 col-sm-6 col-md-4 col-lg-4'
            id={city}>
            <img src={CITIES[city].url} className='city-pic'
              onClick={this.handleClick} id={city}/>
            <label className={name} id={city}
              onClick={this.handleClick}>{city}</label>
          </div>
        );
      }
    }
    return cities;
  }

  render() {
    let cities = this.renderCities();
    // let topRow = [];
    // let bottomRow = [];
    // for (let i = 0; i < cities.length; i++) {
    //   if (i < 3) {
    //     topRow.push(cities[i]);
    //   } else {
    //     bottomRow.push(cities[i]);
    //   }
    // }

    return(
      <div className='featured-cities-container clearfix'>
        <h1>Featured Cities</h1>
        <div className='row'>{cities}</div>
      </div>
    );
  }
}

export default withRouter(FeaturedCities);
