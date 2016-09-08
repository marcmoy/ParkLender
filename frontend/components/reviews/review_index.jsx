import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let reviews = this.props.reviews;
    let reviewBlocks = [];

    for (let id in reviews) {
      if (id) {
        let review = reviews[id];
        reviewBlocks.push(
          <div className="row">
            <ReviewIndexItem review={review} key={id}/>
          </div>
        );
      }
    }

    return (
      <div className="reviews-index-container container clearfix">
        {reviewBlocks}
      </div>
    );
  }
}

export default ReviewIndex;
