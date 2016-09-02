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

  if (spotItems.length === 0) {
    spotItems.push(
      <div className="no-spots-container">
        <h1>Sorry, no spaces were found here</h1>
        <img src='http://res.cloudinary.com/dsvkuc936/image/upload/v1472793127/sad-face_vhh0oo.png'/>
      </div>
    );
  }

  return (
    <aside className='spot-index-container'>
      {spotItems}
    </aside>
  );
};

export default SpotIndex;
