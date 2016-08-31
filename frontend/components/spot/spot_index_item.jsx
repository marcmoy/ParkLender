import React from 'react';
import {
  SpotPhoto, Price, HostPhoto,
  Title, Reviews, Rating
} from './spot_index_item_details';

const SpotIndexItem = ({ spot }) => {
  return(
    <div className='spot-index-item'>
      <figure className='spot-photo-container'>
        <SpotPhoto spot={spot} />
        <HostPhoto host={spot.host} />
        <Price prices={spot.prices} />
      </figure>

      <figcaption className='spot-caption-container'>
        <Title title={spot.title} />
      </figcaption>
    </div>
  );
};

export default SpotIndexItem;




// <Reviews numReviews={spot.reviews.length} />
// <Rating rating={spot.rating} />
