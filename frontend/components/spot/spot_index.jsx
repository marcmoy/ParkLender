import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots = [] }) => {
  const spotIndexItems = spots.map(spot => (
    <li><SpotIndexItem spot={spot} key={spot.id}/></li>
  ));

  return (
    <div className='spot-index'>
      {spotIndexItems}
    </div>
  );
};

export default SpotIndex;
