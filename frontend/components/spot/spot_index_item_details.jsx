import React from 'react';

export const SpotPhoto = ({ spot }) => (
  <div className="picture-overflow">
    <img src={spot.photoUrl} className='main-photo' alt={spot.title}/>
  </div>
);

const priceKey = {
  hourly_rate: "hour",
  daily_rate: "day",
  monthly_rate: "month"} ;

export const Price = ({ prices }) => {

  const priceBlocks = [];

  for (let price in prices) {
    if (prices[price] > 0) {
      let cost = prices[price];
      let text = `$${cost} / ${priceKey[price]}`;
      let className = `price ${price}`;
      let priceBlock = <li className={className} key={price}>
        <span className='price-tag'>{text}</span>
      </li>;
      priceBlocks.push(priceBlock);
    }
  }

  return(
    <ul className='spot-prices'>
      {priceBlocks}
    </ul>
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
  <strong className="spot-title">{title}</strong>
);

export const Reviews = ({ numReviews }) => {
  // debugger
  return(
    <span className='spot-reviews-numbers pull-left'>{numReviews} Reviews </span>
  );
};

export const Rating = ({ rating }) => {
  let stars = [];

  for (let i = 0; i < rating ; i++) {
    stars.push(
      <i className="gold star" key={i + 1}>★</i>
    );
  }

  let j = stars.length + 1;
  while (stars.length < 5) {
    stars.push(
      <i className="gray star" key={j + 1}>★</i>
    );
    j++;
  }

  return(
    <div className='stars-container pull-left'>
      {stars}
    </div>
  );
};
