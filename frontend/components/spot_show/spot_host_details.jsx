import React from 'react';
import { Rating } from '../spot/spot_index_item_details';
import IMAGES from '../../util/images';

const SpotHostDetails = ({ spot }) => (
  <div>
    <aside className="host-photo-container">
      <img src={spot.host.url} />
      <span>{spot.host.name}</span>
    </aside>
    <img src={IMAGES.pin} className="pin"/><h3>{spot.city}, {spot.state}</h3>
    <br/>
    <span className="italicize-text">member since {spot.host.memberSince}</span>
    <br/>
    <span className="italicize-text pull-left host-num-reviews">
      {spot.numReviews} Reviews</span>
    <Rating spot={spot} rating={spot.rating} /><br/>
  </div>
);

export default SpotHostDetails;
