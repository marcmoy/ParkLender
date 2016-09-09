import React from 'react';
import { Rating } from '../spot/spot_index_item_details';
const Pin = "https://res.cloudinary.com/dsvkuc936/image/upload/c_scale,h_39/v1473101163/parklender_assets/pin.png";

const SpotHostDetails = ({ spot }) => (
  <div>
    <aside className="host-photo-container">
      <img src={spot.host.thumbnail} />
      <span>{spot.host.name}</span>
    </aside>
    <img src={Pin} className="pin"/><h3>San Francisco, CA</h3><br/>
    <span className="italicize-text">member since Sept 2016</span><br/>
    <span className="italicize-text pull-left host-num-reviews">
      {spot.numReviews} Reviews</span>
    <Rating spot={spot} rating={spot.rating} /><br/>
  </div>
);

export default SpotHostDetails;
