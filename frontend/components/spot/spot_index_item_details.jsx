import React from 'react';

export const SpotPhoto = ({ spot }) => (
  <img src={spot.photoUrl} className='main-photo' alt={spot.title}/>
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

  for (let i = 0; i < 5 ; i++) {
    stars.push(
      <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/gold-star_rtqymr.png'
        className="gold star" key={i + 1} />
    );
  }

  // if (rating % 1 > 0) {
  //   stars.push(
  //     <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/half-star_f9d73g.png'
  //       className="half star" key={rating} />
  //   );
  // }

  // let j = stars.length + 1;
  // while (stars.length < 5) {
  //   stars.push(
  //     <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472693779/gray-star_nlnsfa.png'
  //       className="gray star" key={j} />
  //   );
  //   j++;
  // }

  return(
    <div className='stars-container'>
      {stars}
    </div>
  );
};
