import React from 'react';
import {
  MainPhoto, Price, HostPhoto,
  Title, Reviews, Rating
} from './spot_index_item_details';

const SpotIndexItem = ({ spot }) => (
  <div className='spot-index-item'>
    <figure className='spot-photo-container'>
      <MainPhoto spot={spot} />
      <Price spot={spot} />
      <HostPhoto host={spot.host} />
    </figure>

    <figcaption className='spot-caption-container'>
      <Title title={spot.title} />
      <Reviews numReviews={spot.reviews.length} />
      <Rating rating={spot.rating} />
    </figcaption>
  </div>
);

export default SpotIndexItem;
