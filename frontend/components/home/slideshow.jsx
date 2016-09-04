import React from 'react';
import Slider from 'react-slick';

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

const Slideshow = () => {

  const images = imagesUrls.map((url,idx) => (
    <img key={idx} src={url} />
  ));

  return (
    <div className="slideshow-container">
      <Slider className="slick-container" {...settings}>
        {images}
      </Slider>
    </div>
  );
};

export default Slideshow;
