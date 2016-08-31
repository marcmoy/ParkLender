import React from 'react';

export const SpotPhoto = ({ spot }) => (
  <img src={spot.photo.url} className='main-photo' alt={spot.title}/>
);

export const Price = ({ prices }) => {

  const priceBlocks = [];

  for (let price in prices) {
    if (prices[price] > 0) {
      let cost = prices[price];
      let text = `$${cost} / ${price}`;
      let priceBlock = <div className={price} key={price}>{text}</div>;
      priceBlocks.push(priceBlock);
    }
  }

  return(
    <div className='spot-prices'>
      {priceBlocks}
    </div>
  );
};

export const HostPhoto = ({ host }) => {
  return (
    <img src={host.thumbnail}
      className='spot-item-host-photo'
      alt={host.username}/>
  );
};

export const Title = ({ title }) => (
  <h1>{title}</h1>
);

export const Reviews = ({ numReviews }) => (
  <span className='number-reviews'>{numReviews} Reviews</span>
);

export const Rating = ({ rating }) => (
  <ul className='stars-container'>
    stars
  </ul>
);
