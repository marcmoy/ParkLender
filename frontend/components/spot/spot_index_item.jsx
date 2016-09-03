import React from 'react';
import {
  SpotPhoto, Price, HostPhoto,
  Title, Reviews, Rating
} from './spot_index_item_details';

const SpotIndexItem = ({ spot }) => {
  return(
    <div
      className='spot-index-item clearfix col-lg-6 col-md-6 col-sm-6 col-xs-12'>
      <a className='listing-photo-container'>
        <SpotPhoto spot={spot} />
        <HostPhoto host={spot.host} />
        <Price prices={spot.prices} />
      </a>

      <div className='spot-caption-container clearfix text-left'>
        <Title title={spot.title} /><br />
        <Reviews numReviews={spot.reviews.length} />
        <Rating spot={spot} rating={spot.rating} />
      </div>
    </div>
  );
};

export default SpotIndexItem;
