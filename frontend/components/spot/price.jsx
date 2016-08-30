import React from 'react';

const Price = ({ spot }) => {

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

export default Price;
