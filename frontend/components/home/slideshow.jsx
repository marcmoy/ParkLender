import React from 'react';
import { withRouter } from 'react-router';
import Slider from 'react-slick';
import HomeWhereTo from '../where_to/home_where_to';

const imagesUrls = [
  "http://res.cloudinary.com/dsvkuc936/image/upload/v1473026130/slideshow/car-dog.jpg",
  "http://res.cloudinary.com/dsvkuc936/image/upload/v1473026223/slideshow/ny.jpg",
  "http://res.cloudinary.com/dsvkuc936/image/upload/v1473026322/slideshow/ladies.jpg",
  "http://res.cloudinary.com/dsvkuc936/image/upload/v1473026261/slideshow/market.jpg",
];

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
    this.goSearch = this.goSearch.bind(this);
  }

  goSearch() {
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
            Book parkings spots from local hosts in your neighborhood and experience a driveway like you own it.<br />
          <div className="home-where-to">
            <form onSubmit={ this.goSearch } >
              <input type="text" id="home-autocomplete-search-field"
                className="home-where-to-input"
                placeholder="Where to?" />
              <HomeWhereTo updateMap={this.props.updateMap} />
              <button className="home-where-to-btn">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Slideshow);
