import React from 'react';
import { Rating } from '../spot/spot_index_item_details';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let review = this.props.review;
    let author = review.author;

    return(
      <div className="review-index-item-container">
        <div className="review-host-photo-container">
          <img src={author.photoUrl} />
          <span>{author.username}</span>
        </div>
        <div className="review-content-container">
          <Rating rating={review.rating} /><br/>
          "{review.content}"
            <br/>
            <br/>
          <span className="review-date">
            {review.date}
          </span>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
