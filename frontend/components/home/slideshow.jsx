import React from 'react';
import { withRouter } from 'react-router';
import Slider from 'react-slick';
import HomeWhereTo from '../where_to/home_where_to';
import IMAGES from '../../util/images';

const imagesUrls = [ IMAGES.carDog, IMAGES.nY, IMAGES.ladies, IMAGES.market ];

const settings = {
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  draggable: false
};

class Slideshow extends React.Component {
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

    const images = imagesUrls.map((url,idx) => (
      <img key={idx} src={url} />
    ));

    return (
      <div className="slideshow-container">
        <Slider className="slick-container" {...settings}>
          {images}
        </Slider>
        <div className="park-there">
          <header>
            PARK THERE
          </header>
            Book parkings spots from local hosts in your neighborhood
            and experience a driveway like you own it.<br />
          <div className="home-where-to">
            <section>
              <input type="text" spellcheck="false" id="home-autocomplete-search-field"
                className="home-where-to-input"
                placeholder="Where to?" />
              <HomeWhereTo sendMap={this.sendMap} />
              <button className="home-search-button"
                onClick={this.goSearch}>Search</button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Slideshow);
