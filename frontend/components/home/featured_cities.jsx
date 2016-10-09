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

  componentDidMount() {
    let pics = $('div.city-pic');
    for (let i = 0; i < pics.length; i++) {
      let $pic = $(pics[i]);
      let city = $pic.attr('id').split(' ').join('');
      let $label = $(`label.${city}`);
      $pic.hover(
        () => $label.animate(
          { height: '3em'},
          { duration: 100,
            complete: () => $label.css({ height: '3em'})
          }
        ),
        () => $label.animate(
          { height: '0'},
          { duration: 100,
            complete: () => $label.css({ height: '0'})
          }
        )
      );
    }
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
          <li key={name} id={city}>
            <div className='overflow city-pic' id={city}>
              <img src={CITIES[city].url} className='city-pic'
                onClick={this.handleClick} id={city}/>
              <label className={name} id={city}
                onClick={this.handleClick}>{city}</label>
            </div>
          </li>
        );
      }
    }
    return cities;
  }

  render() {
    return(
      <div className='featured-cities-container clearfix'>
        <h1>Featured Cities</h1>
        <ul>
          {this.renderCities()}
        </ul>
      </div>
    );
  }
}

export default withRouter(FeaturedCities);
