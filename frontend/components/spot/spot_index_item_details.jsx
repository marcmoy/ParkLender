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

export const Reviews = ({ numReviews }) => {
  // debugger
  return(
    <span className='number-reviews'>{numReviews} Reviews</span>
  );
};

export const Rating = ({ spot, rating }) => {
  let stars = [];

  for (let i = 0; i < rating ; i++) {
    stars.push(
      <img src='https://cloudinary.com/console/media_library#/dialog/image/upload/gold-star_rtqymr'
        className="gold star" key={i + 1} />
    );
  }

  if (rating % 1 > 0) {
    stars.push(
      <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/half-star_f9d73g.png'
        className="half star" key={rating} />
    );
  }

  let j = stars.length + 1;
  while (stars.length < 5) {
    stars.push(
      <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/gray-star_nlnsfa.png'
        className="gray star" key={j} />
    );
    j++;
  }

  return(
    <div className='stars-container'>
      {stars}
    </div>
  );
};
