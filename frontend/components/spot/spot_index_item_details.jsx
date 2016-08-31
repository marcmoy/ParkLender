import React from 'react';

export const MainPhoto = ({ spot }) => (
  <img src={spot.photo.url} className='main-photo' alt={spot.title}/>
);

export const Price = ({ spot }) => {

  const prices = [];
  if (spot.price.hourly > 0) {
    prices.push( <li className='hourly'>{spot.price.hourly}/hour</li>);
  } else if (spot.price.daily > 0) {
    prices.push( <li className='daily'>{spot.price.daily}/day</li>);
  } else if (spot.price.monthly > 0) {
    prices.push( <li className='monthly'>{spot.price.monthly}/month</li>);
  }

  return(
    <div className='spot-prices'>
      {prices}
    </div>
  );
};

export const HostPhoto = ({ spot }) => (
  <div/>
);

export const Title = ({ title }) => (
  <div/>
);

export const Reviews = ({ numReviews }) => (
  <span className='number-reviews'>{numReviews} Reviews</span>
);

export const Rating = ({ rating }) => (
  <ul className='stars-container'>
    stars
  </ul>
);
