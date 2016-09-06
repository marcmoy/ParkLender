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

export const Rating = ({ spot, rating }) => {
  let stars = [];

  for (let i = 0; i < rating ; i++) {
    stars.push(
      <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/gold-star_rtqymr.png'
        className="star" key={i + 1} />
    );
  }

  // if (rating % 1 > 0) {
  //   stars.push(
  //     <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/half-star_f9d73g.png'
  //       className="half star" key={rating} />
  //   );
  // }

  let j = stars.length + 1;
  while (stars.length < 5) {
    stars.push(
      <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/gray-star_nlnsfa.png'
        className="gray star" key={j} />
    );
    j++;
  }

  return(
    <div className='stars-container pull-left'>
      {stars}
    </div>
  );
};
