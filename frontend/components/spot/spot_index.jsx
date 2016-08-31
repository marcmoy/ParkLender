import React from 'react';
import SpotIndexItem from './spot_index_item';

const SpotIndex = ({ spots }) => {

  let spotItems = [];
  for (let id in spots) {
    if (id) {
      let spot = spots[id];
      spotItems.push(<SpotIndexItem spot={spot} key={spot.id}/>);
    }
  }

  return (
    <aside className='spot-index-container'>
      {spotItems}
    </aside>
  );
};

export default SpotIndex;
