import React from 'react';
import { withRouter } from 'react-router';
import FeaturedCities from './featured_cities';
import Footer from '../footer/footer';
import HomeWhereTo from '../where_to/home_where_to';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { center: {}, zoom: 13 };
    this.sendMap = this.sendMap.bind(this);
    this.goSearch = this.goSearch.bind(this);
  }

  sendMap(center, zoom) {
    this.setState({ center: center, zoom: zoom });
    this.props.updateMap(this.state.center, this.state.zoom);
    this.props.router.push("/search");
  }

  goSearch() {
    this.props.updateMap(this.state.center, this.state.zoom);
    this.props.router.push("/search");
  }

  render() {

    return (
      <div>
        <div className='home-page-new'>
        </div>
        <section className='welcome-section clearfix'>
          <div className='card animated fadeInUp'>
            <h1 className='park-there-new'>
              Parking Made Simple.
            </h1>
            <span className='small-text'>
              It's like AirBnB or Uber, but for parking.
            </span>
            <div className="home-where-to-new">
              <input type="text" spellcheck="false"
                id="home-autocomplete-search-field"
                className="home-where-to-input"
                placeholder="Where to?" />
              <button className="home-search-button"
                onClick={this.goSearch}>Search</button>
              <HomeWhereTo sendMap={this.sendMap} />
            </div>
          </div>
        </section>
        <FeaturedCities
          router={this.props.router}
          updateMap={this.props.updateMap}
          />
        <Footer />
      </div>
    );
  }
}

export default withRouter(HomePage);
